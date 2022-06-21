import { useSelector } from "react-redux";
import MemoBox from "./MemoBox";

export default function MemoBoard() {
  const memoList = useSelector((state) => state.memo.memoList);

  return (
    <>
      {memoList.map((list) => (
        <MemoBox
          id={list.id}
          title={list.title}
          memo={list.memo}
          key={list.id}
        ></MemoBox>
      ))}
    </>
  );
}
