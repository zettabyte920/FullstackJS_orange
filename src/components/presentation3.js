import { useState } from "react";

function Presentation2() {
    const [nom, setNom] = useState("ma-societe")
    const [email, setEmail] = useState("ma@societe.com")
    const [logo, setLogo] = useState("image.png")
    const [dep, setDep] = useState([{ "id": "111", "name": "info" }, { "id": "222", "name": "reseau" }])
    return (
        <>
            <h1>Qui sommes nous?</h1>
            <table>
                <td>
                    <tr rowspan={2} colspan={2}>
                        <img width="100px" src={`./images/${logo}`}></img>
                    </tr>
                </td>
                <td>
                    <tr><li>Soceiete: {nom}</li></tr>
                    <tr><li>email: {email}</li></tr>
                </td>
            </table>

            <h1>Liste des departement?</h1>
            <table>
                <td>
                    <tr><ol>
                        {dep.map((d, i) => <li key={i}>{d.id} {d.name}</li>)}
                    </ol></tr>
                </td>
            </table>
        </>
    );
}

export default Presentation2;