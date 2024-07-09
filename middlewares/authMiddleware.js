const JWT = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    try {
        const token = await req.headers['authorization'].split(' ')[1];
        JWT.verify(token , process.env.JWT_SECRET , (err , decode) => {
            if(err){
                return res.status(401).json({
                    success: false,
                    message: 'error in decoding'
                });
            }
            else{
                req.body.userId = decode.userId;
                next();
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Token is not valid'
        });
    }
}