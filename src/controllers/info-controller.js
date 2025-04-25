const {StatusCodes} = require('http-status-code');

const info = (req,res)=>{
     return res.json({
        success:true,
        message: 'API is live',
        error:{},
        date:{},
     });
};

module.exports = {
    info
}