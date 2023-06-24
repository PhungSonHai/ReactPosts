const { User } = require('../models')
const bcrypt = require('bcrypt')

class AuthController {
    async registration(req, res, next) {
        const { username, password, confirmPassword } = req.body

        const user = await User.findOne({ where: { username: username } })

        if(user) {
            res.status(400).json({ message: "Username already exists" })
        }
        else {
            if(password === confirmPassword) {
                bcrypt.hash(password, 10)
                .then(hash => {
                    User.create({
                        username: username,
                        password: hash
                    })
                        .then(() => res.status(200).json({message: "Register Success!"}))
                        .catch(() => res.status(400).json({message: "Register Failed!"}))
                })
                .catch(error => res.json(error))
            } 
            else {
                res.status(400).json({ message: "Password doesn't match" })
            }
        }
    }

    async login(req, res, next) {
        const { username, password } = req.body
        const user = await User.findOne({ where: { username: username } })

        if(!user) {
            res.status(400).json({ message: "User doesn't exist" })
        } else {
            bcrypt.compare(password, user.password)
            .then(match => {
                if(!match) {
                    res.status(400).json({ message: "Password is wrong!" })
                }
                else
                {
                    res.status(200).json({ message: "Logged success!" })
                }
            })
            .catch(error => res.status(400).json(error)) 
        }
    }
}

module.exports = new AuthController;