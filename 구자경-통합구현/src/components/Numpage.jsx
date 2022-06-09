import { useParams } from "react-router-dom";

const Numpage = () => {

  let { num } = useParams();

  return (
    <div>
      <h1>{num}페이지입니다.</h1>
    </div>
  );
};

export default Numpage;
