const express = require('express');
const router = express.Router();
const authenticate = require('../../middlewares/authenticate');
const thongtinGiangVien = require('../../controllers/users/thongtingv.controller');
const bangdieukhien = require('../../controllers/users/bangdieukhien.controller');

router.use('/thongtingiangvien', authenticate, thongtinGiangVien.dashboard);
router.use('/bangdieukhien', authenticate, bangdieukhien.dashboard);

module.exports = router;