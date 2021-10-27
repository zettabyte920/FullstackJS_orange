export default function Fullstack() {

    return (
        <div>
            <h1>Bonjour!</h1>
            <h2>Aujourd'hui : {new Date().toLocaleDateString()}.</h2>
            <h2>il est : {new Date().toLocaleTimeString()}.</h2>
        </div>
    )

}