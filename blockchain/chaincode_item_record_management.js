const shim = require('fabric-shim');

// https://hyperledger.github.io/fabric-chaincode-node/master/api/fabric-shim.ChaincodeStub.html

/**
 * TODO_LIST
 * 1. user, news, ad, => RUD 구현
 * 2. 분배 알고리즘 구현 => clear
 * 3. news history 검색 부분 구현 
 * 4. click event 구현 => clear
 * 5. totalClick 블록하나 만들기 => clear
 * 6. totalADAmount 계산 =>  clear
 */


const Chaincode = class {
    /**
     * @param {Object} stub 
     * @return {SuccessResponse} 
     */
    async Init(stub) {
        console.info('Instantiated completed');
        return shim.success();
    }

    /**
     * @param {Object} stub 
     * @return {SuccessResponse} 
     */
    async Invoke(stub) {

        let ret = stub.getFunctionAndParameters();
        let method = this[ret.fcn];

        if (!method) {
            console.log('Method name [' + ret.fcn + '] is not defined');
            return shim.success();
        }

        try {
            let payload = await method(stub, ret.params);
            return shim.success(payload);

        } catch (err) {
            console.log(err);
            return shim.error(err);
        }
    }

    /**
     * @param {Object} stub 
     * @param {string[]} args args[0]: UserID, args[1]: role,
     */
    async registerUser(stub, args) {

        if (args.length != 2) {
            throw new Error('Incorrect number of arguments. Expecting 2, but received ' + args.length);
        }
        const compositeKey = stub.createCompositeKey("User.", [args[0]]);
        const dupCheck = await stub.getState(compositeKey);

        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };

        if (isExist(dupCheck) != true) {
            throw new Error('User ' + compositeKey + 'is already registered.');
        }


        const txTimestamp = stub.getTxTimestamp();

        let tsSec = txTimestamp.seconds;
        let tsSecValue = tsSec.low + (540 * 60);
        let dataTimeObj = new Date(tsSecValue * 1000);

        const timestampString = dataTimeObj.toISOString().replace(/T|Z|\.\d{3}/g, ' ').trim();
        const userInfo = {
            userID: args[0],
            role: args[1],
            newslist: [],
            activeAD : [],
            createdAt: timestampString,
            state: 'Created'
        };
        await stub.putState(compositeKey, Buffer.from(JSON.stringify(userInfo)));

        const userAccountCompositeKey = stub.createCompositeKey("UserAccount.", [args[0]]);
        const accountInfo = {
            amount : 0,
            createdAt: timestampString
        }
        await stub.putState(userAccountCompositeKey, Buffer.from(JSON.stringify(accountInfo)));

        const newsViewCompositeKey = stub.createCompositeKey("NewsView.", [args[0]]);
        const map = new Map();
        const newsViewInfo = {
            viewers : JSON.stringify(Array.from( map.entries())),
            count : 0,
            createdAt: timestampString
        }
        console.log(newsViewInfo);
        await stub.putState(newsViewCompositeKey, Buffer.from(JSON.stringify(newsViewInfo)));

    }
    
    /**
     * 
     * @param {Object} stub 
     * @param {String[]} args args[0]: UserID, args[1]: role, args[2]: state
     */
    async updateUser(stub, args){
        if (args.length != 3) {
            throw new Error('Incorrect number of arguments. Expecting 3, but received ' + args.length);
        }
        const userCompositeKey = stub.createCompositeKey("User.", [args[0]]);
        const getUser = await stub.getState(userCompositeKey);
        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };
        if(isExist(getUser)){
            throw new Error('registerNews : User'+ userCompositeKey + 'is not existed');
        }
        const userInfo = JSON.parse(getUser);
        userInfo.role = args[1];
        userInfo.state = args[2];
        await stub.putState(compositeKey, Buffer.from(JSON.stringify(userInfo)));
    }
    /**
     * 
     * @param {Object} stub 
     * @param {String[]} args  args[0]: UserID
     */
    async deleteUser(stub, args){
        if (args.length != 1) {
            throw new Error('Incorrect number of arguments. Expecting 1, but received ' + args.length);
        }
        const userCompositeKey = stub.createCompositeKey("User.", [args[0]]);
        const getUser = await stub.getState(userCompositeKey);
        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };
        if(isExist(getUser)){
            throw new Error('registerNews : User'+ userCompositeKey + 'is not existed');
        }
        const userInfo = JSON.parse(getUser);
        userInfo.state = 'Deleted';
        await stub.putState(compositeKey, Buffer.from(JSON.stringify(userInfo)));
    }
    /**
     * @param {Object} stub 
     * @param {string[]} args args[0]: NwesID, args[1]: userID, args[2]:subject, args[3]: content
     */
    async registerNews(stub, args) {

        if (args.length != 4) {
            throw new Error('Incorrect number of arguments. Expecting 4, but received ' + args.length);
        }
        const compositeKey = stub.createCompositeKey("News.", [args[0]]);
        const dupCheck = await stub.getState(compositeKey);

        const userCompositeKey = stub.createCompositeKey("User.",[args[1]]);
        const userCheck = await stub.getState(userCompositeKey);
        
        

        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };

        if(isExist(userCheck)){
            throw new Error('registerNews : User'+ userCompositeKey + 'is not existed');
        }
        if (isExist(dupCheck) != true) {
            throw new Error('registerNews : News ' + compositeKey + 'is already registered.');
        }

        const txTimestamp = stub.getTxTimestamp();

        let tsSec = txTimestamp.seconds;
        let tsSecValue = tsSec.low + (540 * 60);
        let dataTimeObj = new Date(tsSecValue * 1000);

        const timestampString = dataTimeObj.toISOString().replace(/T|Z|\.\d{3}/g, ' ').trim();
        const itemInfo = {
            newsID: args[0],
            userID: args[1],
            subject: args[2],
            content: args[3],
            declarationUsers : [],
            createdAt: timestampString,
            state: 'Deployed'
        };
        await stub.putState(compositeKey, Buffer.from(JSON.stringify(itemInfo)));

    }
    //updateNews
    /**
     * 
     * @param {Object} stub 
     * @param {String[]} args args[0]: NwesID, args[1]: userID, args[2]:subject, args[3]: content
     */
    async updateNews(stub, args){
        const newsCompositeKey = stub.createCompositeKey("News.", [args[0]]);
        const getNews = await stub.getState(newsCompositeKey);
        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };
        if(isExist(getNews)){
            throw new Error('updateNews : News ' + newsCompositeKey + 'is already registered.');
        }
        const newsInfo = JSON.parse(getNews);
     
        newsInfo.newsID = args[0];
        newsInfo.userID = args[1];
        newsInfo.subject = args[2];
        newsInfo.content = args[3];

        await stub.putState(newsCompositeKey, Buffer.from(JSON.stringify(newsInfo)));

    }
    //deleteNews
    /**
     * 
     * @param {Object} stub 
     * @param {String[]} args args[0]: NwesID
     */
    async deleteNews(stub, args){
        const newsCompositeKey = stub.createCompositeKey("News.", [args[0]]);
        const getNews = await stub.getState(newsCompositeKey);
        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };
        if(isExist(getNews)){
            throw new Error('updateNews : News ' + newsCompositeKey + 'is already registered.');
        }
        const newsInfo = JSON.parse(getNews);
        newsInfo.state = 'Deleted';

        await stub.putState(newsCompositeKey, Buffer.from(JSON.stringify(newsInfo)));

    }

    /**
     * @param {Object} stub 
     * @param {string[]} args args[0]: AdvertisementID, args[1]: UserID, args[2]: amount, args[3] : months
     */
    async registerAdvertisement(stub, args) {

        if (args.length != 4) {
            throw new Error('Incorrect number of arguments. Expecting 4, but received ' + args.length);
        }
        const compositeKey = stub.createCompositeKey("Advertisement.", [args[0]]);
        const dupCheck = await stub.getState(compositeKey);

        const userCompositeKey = stub.createCompositeKey("User.",[args[1]]);
        const userCheck = await stub.getState(userCompositeKey);
        
        if(!userCheck){
            throw new Error('registerAdvertisement : User'+ userCompositeKey + 'is not existed');
        }


        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };

        if (isExist(dupCheck) != true) {
            throw new Error('registerAdvertisement : Advertisement ' + compositeKey + 'is already registered.');
        }

        const txTimestamp = stub.getTxTimestamp();

        let tsSec = txTimestamp.seconds;
        let tsSecValue = tsSec.low + (540 * 60);
        let dataTimeObj = new Date(tsSecValue * 1000);

        const timestampString = dataTimeObj.toISOString().replace(/T|Z|\.\d{3}/g, ' ').trim();
        const advertisementInfo = {
            advertisementID: args[0],
            userID: args[1],
            amount : parseInt(args[2]),
            end : args[3],
            createdAt: timestampString,
            state: 'Created'
        };
        await stub.putState(compositeKey, Buffer.from(JSON.stringify(advertisementInfo)));
    }

    /**
     * 
     * @param {Object} stub 
     * @param {String[]} args args[0]: UserID, args[1]: NewsID
     */
    async clickNews(stub, args){

        if (args.length != 2) {
            throw new Error('Incorrect number of arguments. Expecting 2, but received ' + args.length);
        }
        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };

        const userCompositeKey = stub.createCompositeKey("User.",[args[0]]);
        const userCheck = await stub.getState(userCompositeKey);
        if(isExist(userCheck)){
            throw new Error('clickNews : User'+ userCompositeKey + 'is not existed');
        }
        const newsCompositeKey = stub.createCompositeKey("News.", [args[1]]);
        const newsCheck = await stub.getState(newsCompositeKey);
        if(isExist(newsCheck)){
            throw new Error('clickNews : User'+ newsCompositeKey + 'is not existed');
        }
        const newsInfo = JSON.parse(newsCheck);
        const newsViewCompositeKey = stub.createCompositeKey("NewsView.", [newsInfo.userID]);
        const getNewsView = await stub.getState(newsViewCompositeKey);
        const newsViewInfo = JSON.parse(getNewsView);
        const map = new Map(JSON.parse(newsViewInfo.viewers));
        if(!(map.has(args[1]))
                ||!((map.has(args[1])
                &&new Set(JSON.parse(map.get(args[1]))).has(args[0])))){
            const totalClickCompositeKey = stub.createCompositeKey("TotalClick.", []);
            const getTotalClick = await stub.getState(totalClickCompositeKey);
            const totalClickInfo = JSON.parse(getTotalClick);
            totalClickInfo.totalClick = totalClickInfo.totalClick+1;   
            await stub.putState(totalClickCompositeKey, Buffer.from(JSON.stringify(totalClickInfo)));
            
            let getViwers = map.get(args[1]);
            if(!getViwers){
                const set = new Set().add(args[0]);
                map.set(args[1],JSON.stringify(Array.from( set)));
            }else{
                const set = new Set(JSON.parse(getViwers));
                set.add(args[0]);
                map.set(args[1],JSON.stringify(Array.from( set)));
            }
            newsViewInfo.count = newsViewInfo.count+1;
            newsViewInfo.viewers = JSON.stringify(Array.from( map.entries()));
            await stub.putState(newsViewCompositeKey, Buffer.from(JSON.stringify(newsViewInfo)));
        }

    }

    //Declaration

    /**
     * 
     * @param {Object} stub 
     * @param {String[]} args args[0]: NewsID, args[1]: UserID, args[2]: contents
     */
    async declarationNews(stub, args){
        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };
        
        if (args.length != 3) {
            throw new Error('Incorrect number of arguments. Expecting 3, but received ' + args.length);
        } 

        //News 찾기 및 검증
        const newsCompositeKey = stub.createCompositeKey("News.", [args[0]]);
        const newsCheck = await stub.getState(newsCompositeKey);
        if(isExist(newsCheck)){
            throw new Error('declarationNews : User'+ newsCompositeKey + 'is not existed');
        }
        const newsInfo = JSON.parse(newsCheck);
        //User 찾기 및 검증
        const userCompositeKey = stub.createCompositeKey("User.",[args[1]]);
        const userCheck = await stub.getState(userCompositeKey);
        if(isExist(userCheck)){
            throw new Error('declarationNewsx : User'+ userCompositeKey + 'is not existed');
        }

        //키 만들고
        const declarationNewsCompositeKey = stub.createCompositeKey("News.", [args[0], args[1]]);
        const dupCheck = await stub.getState(declarationNewsCompositeKey);
        if (isExist(dupCheck) != true) {
            throw new Error('declarationNews ' + declarationNewsCompositeKey + 'is already registered.');
        }


        //저장
        const declarationNewsInfo = {
            newsID : args[0],
            userID : args[1],
            contents: args[2]
        }
        newsInfo.declarationUsers.push(declarationNewsInfo.userID);
        await stub.putState(newsCompositeKey, Buffer.from(JSON.stringify(newsInfo)));
        await stub.putState(declarationNewsCompositeKey, Buffer.from(JSON.stringify(declarationNewsInfo)));
    }


    /**
     * 
     * @param {Object} stub 
     * @param {String[]} args args[0] : newsID List or 기자ID List
     */
    async divisionAmount(stub, args){
        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };
        if (args.length != 1) {
            throw new Error('Incorrect number of arguments. Expecting 2, but received ' + args.length);
        }   

        const totalADAmountCompositeKey = stub.createCompositeKey("TotalADAmount.", []);
        const totalADAmountCheck = await stub.getState(totalADAmountCompositeKey);
        const totalADAmountInfo = JSON.parse(totalADAmountCheck); // .totalADAmount

        const totalClickCompositeKey = stub.createCompositeKey("TotalClick.", []);
        const getTotalClick = await stub.getState(totalClickCompositeKey);
        const totalClickInfo = JSON.parse(getTotalClick); // .totalClick

        const reporterList = args[0].split(',');
        
        for(let i=0; i<reporterList.length; i++){
            const newsViewCompositeKey = stub.createCompositeKey("NewsView.", [reporterList[i]]);
            const getNewsView = await stub.getState(newsViewCompositeKey);
            if(isExist(getNewsView)){
                throw new Error('divisionAmount : User'+ getNewsView + 'is not existed');
            }
            const newsViewInfo = JSON.parse(getNewsView);
            if(newsViewInfo.count===0){
                continue;
            }

            const userAccountCompositeKey = stub.createCompositeKey("UserAccount.", [reporterList[i]]);
            const getUserAccount = await stub.getState(userAccountCompositeKey);
            const userAccountInfo = JSON.parse(getUserAccount); // .amount
            
            //total을 계산해서 넣어줘야한다. userAccountInfo 여길로
            const userAmount = Math.floor(totalADAmountInfo.totalADAmount*((newsViewInfo.count/totalClickInfo.totalClick)));
            userAccountInfo.amount = userAmount;
            newsViewInfo.count = 0;
            newsViewInfo.viewers = JSON.stringify(Array.from( new Map().entries()));
            console.log(newsViewInfo);
            await stub.putState(newsViewCompositeKey, Buffer.from(JSON.stringify(newsViewInfo)));
            await stub.putState(newsViewCompositeKey, Buffer.from(JSON.stringify(newsViewInfo)));
            await stub.putState(userAccountCompositeKey, Buffer.from(JSON.stringify(userAccountInfo)));

        }
        totalClickInfo.totalClick = 0;
        totalADAmountInfo.totalADAmount = 0;
        await stub.putState(totalClickCompositeKey, Buffer.from(JSON.stringify(totalClickInfo)));
        await stub.putState(totalADAmountCompositeKey, Buffer.from(JSON.stringify(totalADAmountInfo)));
    }

    //arg[0] : [adID]
    async totalADAmountCalculation(stub, args){
        
        const isExist = function(value) {
            if (value == "" || value == null || value == undefined ||
                (value != null && typeof value == "object" && !Object.keys(value).length)) {
                return true;
            } else {
                return false;
            }
        };
        
        let totalAmount = 0;
        const adArray = args[0].split(',');
        for(let i=0; i<adArray.length; i++){
            
            const compositeKey = stub.createCompositeKey("Advertisement.", [adArray[i]]);
            const adCheck = await stub.getState(compositeKey);
            if(isExist(adCheck)){
                throw new Error('totalADAmountCalculation : Advertisement ' + compositeKey + 'is not registered.');
            }
            const adInfo = JSON.parse(adCheck);
            console.log(adInfo.amount);
            totalAmount += parseInt(adInfo.amount);
        }
        const totalADAmountInfo = { 
            totalADAmount: totalAmount 
        };
        const totalClickInfo = {
            totalClick: 0
        }
        const totalADAmountCompositeKey = stub.createCompositeKey("TotalADAmount.", []);
        const totalClickCompositeKey = stub.createCompositeKey("TotalClick.", []);
        await stub.putState(totalADAmountCompositeKey, Buffer.from(JSON.stringify(totalADAmountInfo)));
        await stub.putState(totalClickCompositeKey, Buffer.from(JSON.stringify(totalClickInfo)));
    }

    /**
     * @param {Object} stub 
     * @param {string[]} args args[0]: 찾는것, args[1] : 해당id
     * @return {string} The asset information of assetID
     */
    async query(stub, args) {

        //News
        //User - userviewes, useraccount 
        //AD
        //total
        console.log(args[0]);
        console.log(args[1]);
        
        let returnData = null;
        if(args[0]==='news'){
            const searchKey = stub.createCompositeKey("News.", [args[1]]);
            returnData = await stub.getState(searchKey);
            
        }else if(args[0]==='user'){
            const searchKey = stub.createCompositeKey("User.", [args[1]]);
            returnData = await stub.getState(searchKey);

            //나머지 데이터는 console.log로 찍어주자
        }else if(args[0]==='AD'){
            const searchKey = stub.createCompositeKey("Advertisement.", [args[1]]);
            returnData = await stub.getState(searchKey);
        }else if(args[0]==='totalClick'){
            const searchKey = stub.createCompositeKey("TotalClick.", []);
            returnData = await stub.getState(searchKey);
        }else if(args[0]==='totalAmount'){
            const searchKey = stub.createCompositeKey("TotalADAmount.", []);
            returnData = await stub.getState(searchKey);
        }else if(args[0]==='userAccount'){
            const searchKey = stub.createCompositeKey("UserAccount.", [args[1]]);
            returnData = await stub.getState(searchKey);
        }else if(args[0]==='userNewsView'){
            const searchKey = stub.createCompositeKey("NewsView.", [args[1]]);
            returnData = await stub.getState(searchKey);
        }else if(args[0]==='test'){
            const searchKey = stub.createCompositeKey("test.",[]);
            returnData = await stub.getState(searchKey);
        }
        else{   
            throw new Error('Query : key is not existed');
        }
        

        console.info(returnData);
        return returnData;
    }


    /**
     * @param {Object} stub 
     * @param {string[]} args args[0]: NewsID
     * @return {string} The history of records
     */
    async getNewsHistory(stub, args) {
        
        if (args.length != 1) {
            throw new Error('Incorrect number of arguments. Expecting assetID as an argument');
        }

        const searchKey = stub.createCompositeKey("News.", [args[0]]);
        const historyIter = await stub.getHistoryForKey(searchKey);
        let results = [];
        let res = { done: false };

        while (!res.done) {
            res = await historyIter.next();

            try {
                if (res && res.value && res.value.value) {
                    let val = res.value.value.toString('utf8');
                    if (val.length > 0) {
                        results.push(JSON.parse(val));
                        console.info(JSON.parse(val));
                    }
                }
            } catch (err) {
                console.info(err);
            }
            if (res && res.done) {
                try {
                    historyIter.close();
                } catch (err) {
                    console.info(err);
                }
            }
        }

        return Buffer.from(JSON.stringify(results));
    }

};

/** Start chaincode */
shim.start(new Chaincode());