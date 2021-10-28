import React from "react"
class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            departs: {
                list: []
            }
        }
    }

    setDep = (e) => {
        //add a new department name in state
        this.setState({ name: e.target.value })
    }
    addDep = () => {
        let newArr = {
            id: this.state.departs.list[this.state.departs.list.length - 1]?.id + 1 || 0,
            name: this.state.name
        }
        //add a new department
        this.setState({
            departs: {
                list: [...this.state.departs.list, newArr]
            }
        })
    }
    suppDep = (i) => {
        //delete selected department
        this.setState({
            departs: {
                list: this.state.departs.list.filter((a) => { return a.id != i })
            }
        })

    }

    render() {
        return (
            <table>
                <thead><h1>Liste des departement?</h1></thead>
                <tbody>
                    <tr>
                        <td>
                            <input onChange={this.setDep} placeholder="entrez le nom"></input>
                            <button onClick={this.addDep}>add</button>
                        </td>
                    </tr>
                    {this.state.departs.list.length > 0 ? this.state.departs.list.map((d, i) =>
                        <>
                            <tr>
                                <td>{d.id || i}</td>
                                <td>{d.name}</td>
                                <td><button onClick={() => this.suppDep(d.id)}>x</button></td>
                            </tr>
                        </>
                    ) : "svp! ajouter un nouveau département"}
                </tbody>
            </table>
        );
    }
}

export default Presentation;