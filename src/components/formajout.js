import { Component } from "react"
class FormAjout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <input onChange={this.props.set} placeholder="Entrez le nom"></input>
                <button onClick={this.props.add}>add</button>
            </>
        );
    }
}

export default FormAjout;