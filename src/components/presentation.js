import React from "react"
class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titre: "Qui sommes nous?",
            contact: {
                nom: "ma-societe",
                email: "ma@societe.com",
                logo: "./images/image.png",
            },
            departs: {
                titre: "Liste des departement?",
                list: [
                    { "id": "111", "name": "info" },
                    { "id": "222", "name": "reseau" }
                ]
            }


        }
    }
    render() {
        return (
            <>

                <table>
                    <thead><h1>{this.state.titre}</h1></thead>
                    <tbody>
                        <tr>
                            <td rowspan={2} colspan={2}>
                                <img width="100px" src={this.state.contact.logo}></img>
                            </td>
                            <td>
                                <ul>
                                    <li>Soceiete: {this.state.contact.nom}</li>
                                    <li>email: {this.state.contact.email}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead><h1>{this.state.departs.titre}</h1></thead>
                    <tbody>
                        {this.state.departs.list.map((d, i) =>
                            <>
                                <tr>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Presentation;