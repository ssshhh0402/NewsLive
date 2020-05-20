const express = require('express');
const morgan = require('morgan');

const app = express();

const morphemeAnalysis = require('./routes/morpheme');

app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(morgan('dev'));

app.use('/api/morpheme',morphemeAnalysis);

app.listen(3777,()=>{
    console.log("Server is runing");
})