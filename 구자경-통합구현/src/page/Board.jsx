import { Link, Outlet } from 'react-router-dom'

const Board = () => {

  return (
    <div>
      <h1>Board</h1>
      <p>파라미터 및 중첩 라우터를 사용하여 아래 Board의 내용이 보입니다.</p>
      <Link to={"/board/1"}>1</Link>
      <Link to={"/board/2"}>2</Link>
      <Link to={"/board/3"}>3</Link>
      <Link to={"/board/4"}>4</Link>
      <Link to={"/board/5"}>5</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Board;
