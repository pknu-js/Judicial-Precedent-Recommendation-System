const express = require('express')
const router = express.Router()

//html 파일 읽기
router.get('/', (req, res) => {
	res.render('inputincident');
  })

  
module.exports = router;