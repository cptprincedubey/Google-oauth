const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/google",passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get( 
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/api/auth/google/failed", 
  }),
  async (req, res) => {
    try {
        console.log("done--->", req.user)
        res.redirect('/api/auth/profile')
    } catch (error) {
        console.log("error in callback url", error)
    }
  }
);

router.get("/google/failed", (req, res) => {
  res.send("Tumse nahi ho paya");

});


router.get('/profile', (req, res) => {
    res.send(`welcome ${req.user.displayName}`)
})

module.exports = router;
