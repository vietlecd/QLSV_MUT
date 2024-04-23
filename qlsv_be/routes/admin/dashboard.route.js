const express = require('express');

const router = express.Router();
const studentRoute = require('./student.route');
const teacherRoute = require('./teacher.route');
const control_panelRoute = require('./control_panel.route');
const adminController = require('../../controllers/admin/admin.controller');
const authenticate = require('../../middlewares/authenticate');
// Import routes

// Dashboard route
router.get('/', (req, res) => {
    res.send('Welcome to the dashboard!');
});
router.use('/student', studentRoute); 
router.use('/teacher', teacherRoute);
router.use('/controlpanel', control_panelRoute); 
router.post('/addAdmin', adminController.addAdmin);

module.exports = router;