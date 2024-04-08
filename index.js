const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const UserModel = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/MUT_LMS');

const varifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("Token is missing")
    }
    else {
        return jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.json("Error with token")
            }
            else {
                if (decoded.role === "admin") {
                   next();
                } else {
                    return res.json("You are not authorized")
                }

            }
        })
    }

}
app.get('/dashboard', varifyUser, (req, res) => {
    res.json("Dashboard");
})
// register
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
    .then((hash) => {
        UserModel.create({
            name,
            email,
            password: hash
        })
        .then (user => res.json("Success!"))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})

// login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
    .then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if (response) {
                    const token = jwt.sign({email: user.email, role: user.role},
                        "jwt-secret-key", { expiresIn: '1d' })
                    res.cookie("token", token)
                    return res.json("Success!")
                }
                else {
                    return res.json("The password you’ve entered is incorrect")
                }
            })
        }   
        else {
            res.json("No record found")
        }
    })
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});