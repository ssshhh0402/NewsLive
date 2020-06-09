ssh hfteam2@l02bch4.p.ssafy.io

## 체인코드 설치/인스턴스 생성 명령어 
(HFTeam2) **`HFTeam2MSP`, `peer0.HFTeam2`, `team2channel` 이름이 올바르게 지정되었는지 확인할 것**
```bash
$ sudo docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode install -n news_52 -v 0.1 -l node -p /var/hyperledger/chaincode/node
$ sudo docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode instantiate -o orderer0.ordererorg:7050 -C team2channel -n news_52 -v 0.1 -c '{"Args":["init"]}' -P "OR('HFTeam2MSP.member')"
```

docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["totalADAmountCalculation","ad123"]}'

docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["clickNews","qwer123","news123"]}'


## 체인코드 테스트 명령어 

```bash
# User
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["registerUser","qwer123","repoter"]}'
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode query -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["query","user","qwer123"]}'
```
```bash
args[0]: NwesID, args[1]: userID, args[2]:subject, args[3]: content
# News
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["registerNews","news123","qwer123","sports","content123"]}'
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode query -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["query","news","news123"]}'
```
```bash
# AD
args[0]: AdvertisementID, args[1]: UserID, args[2]: amount, args[3] : months
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["registerAdvertisement","ad123","qwer123","1000000","3"]}'
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode query -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["query","AD","ad123"]}'
```
```bash
# totalADAmountCalculation
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["totalADAmountCalculation","ad123"]}'
```
```bash
# click
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["clickNews","qwer123","news123"]}'
```
```bash
# totalClick
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode query -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["query","totalClick"]}'
```
```bash
# totalAmount
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode query -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["query","totalAmount"]}'
```
```bash
# userAccount
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode query -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["query","userAccount","qwer1234"]}'
``````bash
# userNewsView
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode query -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["query","userNewsView","qwer123"]}'
```

``````bash
# divisionAmount
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["divisionAmount","qwer123,qwer1234"]}'
```

args[0]: NwesID, args[1]: userID, args[2]:subject, args[3]: conten

``````bash
# updateNews
# args[0]: NwesID, args[1]: userID, args[2]:subject, args[3]: conten
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["updateNews","news123","qwer123","sports","TTTTTTTTT"]}'
```
``````bash
# deleteNews
# args[0]: NwesID
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["deleteNews","news123"]}'
```
``````bash
# declarationNews
# args[0]: NewsID, args[1]: UserID, args[2]: contents
$ docker exec -e "CORE_PEER_LOCALMSPID=HFTeam2MSP" -e "CORE_PEER_MSPCONFIGPATH=/var/hyperledger/users/msp" peer0.HFTeam2 peer chaincode invoke -o orderer0.ordererorg:7050 -C team2channel -n news_52 -c '{"Args":["declarationNews","news123", "qwer1234", "NONONONONO"]}'
```