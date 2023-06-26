const { verify } = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    const accessToken = req.header('accessToken')

    if(!accessToken) {
        res.json({ error: "User is not logged in!" })
    }

    try 
    {
        const validToken = verify(accessToken, "accessToken")
        req.user = validToken
        if(validToken) {
            return next();
        }
    } 
    catch (error) 
    {
        res.json({ error })
    }
}

module.exports = { validateToken }