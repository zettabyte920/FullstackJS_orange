import { useState } from "react"
import React from "react"


class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accueil: "Bienvenue a notre site de la societe: Ma societe"
        }
    }
    render() {
        return (
            <h1>{this.state.accueil}</h1>
        );
    }
}



export default Accueil