var express = require('express');
var axios = require('axios')
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res,) => {
  let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  console.log(response)
  res.send(response.data);
});

module.exports = router;
