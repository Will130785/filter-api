const router = require('express').Router()

router.get('/', (req, res) => {
  console.log('this is a test route')
})

module.exports = router
