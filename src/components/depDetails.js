import { Component } from "react"
class DepDetails extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.dep.id || this.props.index}</td>
                <td>{this.props.dep.name}</td>
                <td><button onClick={() => this.props.supp(this.props.dep.id)}>x</button></td>
            </tr>
        );
    }
}

export default DepDetails;