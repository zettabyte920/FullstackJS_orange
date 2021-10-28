import { Component } from "react"
class FormRecherche extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr style={{ fontSize: '30px' }}>
                            <td>
                                <b>Images search:</b>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input onChange={this.props.set} placeholder="Mot clé"></input>
                                <button onClick={this.props.search}>Recherche</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ paddingTop: '5px' }}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default FormRecherche;