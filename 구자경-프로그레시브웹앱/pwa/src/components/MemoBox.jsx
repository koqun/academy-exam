import { useDispatch } from "react-redux";
import { deleteMemo } from "../store";

const MemoBox = ({ id, title, memo }) => {
    const dispatch = useDispatch();
    const deleteById = () => {
        dispatch(deleteMemo(id))
    }

    return (<>
        <p>제목: {title} <button onClick={deleteById}>X</button></p>
        <p>내용: {memo}</p>
    </>)
}

export default MemoBox;