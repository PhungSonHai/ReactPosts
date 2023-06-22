const { User } = require('../models')
const bcrypt = require('bcrypt')

class AuthController {
    registration(req, res, next) {
        const { username, password, confirmPassword } = req.body

        if(password === confirmPassword) {
            bcrypt.hash(password, 10)
            .then(hash => {
                User.create({
                    username: username,
                    password: hash
                })
                    .then(() => res.json({message: "Register Success!"}))
                    .catch(() => res.json({message: "Register Failed!"}))
            })
            .catch(error => res.json(error))
        } 
        else {
            res.json({ message: "Password doesn't match" })
        }
    }

    async login(req, res, next) {
        const { username, password } = req.body
        const user = await User.findOne({ where: { username: username } })

        if(!user) {
            res.json({ message: "User doesn't exist" })
        }
        
        bcrypt.compare(password, user.password)
            .then(match => {
                if(!match) {
                    res.json({ message: "Password is wrong!" })
                }
                else
                {
                    res.json({ message: "Logged success!" })
                }
            })
            .catch(error => res.json(error)) 
    }
}

module.exports = new AuthController;