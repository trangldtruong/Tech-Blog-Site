const router = require('express').Router();


router.get('/', (req, res) => {
  console.log('Hello')
  res.send('hello')
})

module.exports = router;