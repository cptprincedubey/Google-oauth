
require('dotenv').config()
const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const session = require('express-session')
const authRoutes = require('./src/routes/auth.routes')
const cors = require('cors')



const app= express()

app.use(express.json());
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())


passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(profile)
    return done(null, profile)
    } catch (error) {
        console.log("error in google strategy", error)
        return done(error, null)
    }
}))

app.use(
  cors({
    origin: "http://localhost:3000", // your frontend URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);



passport.serializeUser((user, done) => done(null, user) )
passport.deserializeUser((user, done) => done(null, user) )

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
    res.send('<a href="/api/auth/google">Login with google</a>')
})


app.listen(3000, () => {
    console.log('server is running on port 3000')
})