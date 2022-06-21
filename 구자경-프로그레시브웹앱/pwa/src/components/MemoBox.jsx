import { useDispatch } from "react-redux";
import { deleteMemo } from "../store";

export default function MemoBox({ id, title, memo }) {
  const dispatch = useDispatch();
  const deleteById = () => {
    dispatch(deleteMemo(id));
  };

  return (
    <>
      <p>
        제목: {title} <button onClick={deleteById}>X</button>
      </p>
      <p>내용: {memo}</p>
    </>
  );
}
