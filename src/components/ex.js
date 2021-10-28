import { useState } from "react";

function Ex() {
    const [count, setCount] = useState(0)
    return (
        <>
            Valeur du compteur {count} <br />
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>);
}

export default Ex;