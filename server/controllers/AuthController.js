const { User } = require('../models')
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')

class AuthController {
    async registration(req, res, next) {
        const { username, password, confirmPassword } = req.body

        const user = await User.findOne({ where: { username: username } })

        if(user) {
            res.json({ error: "Username already exists" })
        }
        else {
            if(password === confirmPassword) {
                bcrypt.hash(password, 10)
                .then(hash => {
                    User.create({
                        username: username,
                        password: hash
                    })
                        .then(() => res.json({message: "Register Success!"}))
                        .catch(() => res.json({error: "Register Failed!"}))
                })
                .catch(error => res.json({ error }))
            } 
            else {
                res.json({ error: "Password doesn't match" })
            }
        }
    }

    async login(req, res, next) {
        const { username, password } = req.body
        const user = await User.findOne({ where: { username: username } })

        if(!user) {
            res.json({ error: "User doesn't exist" })
        } else {
            bcrypt.compare(password, user.password)
            .then(match => {
                if(!match) {
                    res.json({ error: "Password is wrong!" })
                }
                else
                {
                    var accessToken =  sign({ id: user.id, username: user.username }, "accessToken")
                    res.json(accessToken)
                }
            })
            .catch(error => res.json({ error: "Error occurred" })) 
        }
    }
}

module.exports = new AuthController;