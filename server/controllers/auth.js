const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const _user = new User({
            email,
            password,
            username: Math.random().toString()
        })
        _user.save((error, data) => {
            console.log(error);
            if (error) {
                return res.this.status(400).json({
                    response: {
                        'status': 400,
                        'msg': "Something went wrong",
                    }
                });
            }

            if (data) {
                return res.status(201).json({
                    user: data,
                    response: {
                        'status': 200,
                        'msg': "User created successfully"
                    }
                })
            }
        })
    } catch (err) {
        return res.status(401).json({
            user: data,
            response: {
                'status': 401,
                'msg': "Internal server error"
            }
        })
    }
}