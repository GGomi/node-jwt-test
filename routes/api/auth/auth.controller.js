const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

/*
    POST /api/auth
    {
        username,
        password
    }
*/

exports.login = (req, res) => {
    const {username, password} = req.body
    const secret = req.app.get('jwt-secret')
    // 
    const check = (user) => {
        if(!user) {
            throw new Error('login failed')
        } else {
            if(user.verify(password)) {
                const p = new Promise((resolve, reject) => {
                    jwt.sign(
                        {
                            _id: user._id,
                            username: user.username,
                            admin: "test"
                        }, 
                        secret, 
                        {
                            expiresIn: 60,
                            issuer: 'mediagram.co.kr',
                            subject: 'userInfo'
                        }, (err, token) => {
                            if (err) reject(err)
                            resolve(token)
                        })
                })
                return p
            } else {
                throw new Error('login failed')
            }
        }
    }

    // respond the token 
    const respond = (token) => {
        res.json({
            message: 'logged in successfully',
            token
        })
    }

    // error occured
    const onError = (error) => {
        res.status(403).json({
            message: error.message
        })
    }

    // find the user
    User.findOneByUsername(username)
    .then(check)
    .then(respond)
    .catch(onError)

}


exports.register = (req, res) => {
    const { username, password } = req.body

    const create = (user) => {
        if(user) {
            throw new Error('username exists')
        } else {
            return User.create(username, password)
        }
    }

    const respond = () => {
        res.json({
            message: 'registered successfully'
        })
    }

    // Error username exist
    const onError = (error) => {
        res.status(409).json({
            message: error.message
        })
    }

    // check username duplication
    User.findOneByUsername(username)
    .then(create)
    .then(respond)
    .catch(onError)
}

exports.check = (req, res) => {
    res.json({
        req : req.decoded,
        success: true,
        info: req.decoded
    })
}