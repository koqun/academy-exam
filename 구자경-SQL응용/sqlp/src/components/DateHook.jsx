import { useState, useEffect } from "react"

const DateHook = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => { /* mount */
        setInterval(() => tick(), 1000);
    },[])

    return (
        <div>
            <h1>{ date.toLocaleTimeString() }</h1>
        </div>
    )
}
export default DateHook;