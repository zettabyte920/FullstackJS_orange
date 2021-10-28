import React, { Component } from "react"
class Propos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titre: "Qui sommes nous?",
            contact: {
                nom: "ma-societe",
                email: "ma@societe.com",
                logo: "./images/image.png",
            },
        }
    }
    render() {
        return (
            <table>
                <thead>
                    <tr style={{ fontSize: '30px' }}>
                        <td>
                            <b>{this.state.titre}</b>
                        </td>
                    </tr>
                </thead >
                <tbody>
                    <tr>
                        <td rowSpan={2} colSpan={2}>
                            <img width="100px" src={this.state.contact.logo} alt="company logo"></img>
                        </td>
                        <td>
                            <ul>
                                <li>Soceiete: {this.state.contact.nom}</li>
                                <li>email: {this.state.contact.email}</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table >
        );
    }
}

export default Propos;