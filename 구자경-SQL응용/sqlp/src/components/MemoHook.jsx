import { useState, useMemo, useCallback } from "react";

const MemoHook = () => {
  const [inputnum, setInputnum] = useState(0);
  const [number, setNumber] = useState([1, 5, 10, 4]);

  const onChange = useCallback((event) => {
    console.log('')
    setInputnum(event.target.value);
  }, []);

  const addNum = () => {
    setNumber([...number, Number(inputnum)]);
  }

  const avrSum = (list) => {
    return list.reduce((a, b) => a + b);
  }

  const sum = useMemo(() => avrSum(number), [number]);

  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={addNum}>추가</button>
      <h3>모든 수의 평균 : {(sum / number.length).toFixed(1)}</h3>
      <ul>
        {number.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  )
}

export default MemoHook;