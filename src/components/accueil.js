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

function Accueil2() {
    const [accueil, setAccueil] = useState("Bienvenue a notre site de la societe: Ma societe")
    return (
        <>
            <h1>{accueil}</h1>
        </>
    );
}

export {
    Accueil
};