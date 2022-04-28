var express = require('express');
var router = express.Router();
const memos = require('../memo.json');

// GET를 통해 메모를 보내줌
router.get('/', function(req, res, next) {
  console.log(memos);
  res.send(memos);
});

router.post('/', function(req, res, next) {
  const memo= req.body.data;
  const m = {
    id:memo.id,
    title:memo.title,
    memo:memo.memo,
    writer:memo.writer,
  };

  memos.push(m);
  res.send("done");
})
module.exports = router;

