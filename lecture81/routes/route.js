const express = require('express');
const router = express.Router();

// middlewares
const auth = (req, res, next) => {
    console.log('Im inside auth wala middleware');
    
    // adding a dummy user object to req
    req.user = { id: 1, name: 'John Doe', role: 'student' };
    if(req.user){
        // if a valid user is present in req,
        // Then proceed to next middleware
        next();
    }
    else{
        // if not a valid user,
        // block the request
        res.json({
            success: false,
            message: 'Not a valid user'
        });
    }
}
const isStudent = (req, res, next) => {
    console.log('Im inside Student wala middleware');

    req.user.role === 'student' ? next() : res.json({
        success: false,
        message: 'Access denied, this route is only for students'
    });
}
const isAdmin = (req, res, next) => {
    console.log('Im inside Admin wala middleware');
    req.user.role === 'admin' ? next() : res.json({
        success: false,
        message: 'Access denied, this route is only for admins'
    });
}



// routes
router.get("/student", auth, isStudent, (req, res) => {
    console.log('Im inside student route');
    res.send("Student specific page");
});
router.get("/admin", auth, isAdmin, (req, res) => {
    console.log('Im inside admin route');
    res.send("Admin specific page");
});




module.exports = router;