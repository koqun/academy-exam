var express = require('express');
var router = express.Router();
const memos = require('../memo.json');

// get를 통해 메모를 보내줌
router.get('/', function(req, res, next) {
  console.log(memos);
  res.send(memos);
});

// get을 통해 id값이 동일한 메모를 보내줌
router.get("/:id", function(req, res, next){
  console.log(req.params.id)
  const id = req.params.id;
  // m은 memos의 필터의 결과가 참인 객체들을 배열로 가져옴
  const m = memos.filter((memos)=> {if(memos.id==id) {return true}})
  res.send(m[0])
})

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

