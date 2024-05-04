const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path'); //Upload image
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const cloudinary = require('../../configs/cloudinary')
const studentController = require('../../controllers/admin/student.controller');


//define multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'images',
    allowedFormats: ['jpg', 'png', 'jpeg'],
    
});

const upload = multer({ storage: storage });

// Route to update a student's information and handle image upload
router.post('/upload/:mssv', upload.fields([{name: 'image', maxCount: 1}]), (req, res) => {
  const link_img = req.files['img'][0]
  res.send(link_img);
});

router.get('/', studentController.getAllStudents);
router.post('/add', studentController.addStudent);
router.put('/:mssv', studentController.updateStudent);
router.delete('/:mssv', studentController.deleteStudent);
router.get('/:mssv', studentController.findStudentByMssv);

module.exports = router;