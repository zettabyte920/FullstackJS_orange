import { useEffect, useState } from "react"
function Exemple() {
    const [count, sectCount] = useState(0)
    useEffect(() => {
        document.title = count
    })
    return (
        <>
            <button onClick={() => sectCount(count + 1)}></button>
        </>
    );
}

export default Exemple;