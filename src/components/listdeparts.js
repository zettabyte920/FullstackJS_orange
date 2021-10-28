import React from "react"
import DepDetails from "./depDetails";
import FormAjout from "./formajout";
class ListDeparts extends React.Component {
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
        if (!this.state.name) {
            //return false when no name provided
            alert("svp! veuillez fournir un nom de département")
            return;
        }
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
                list: this.state.departs.list.filter((a) => { return a.id !== i })
            }
        })

    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr style={{ fontSize: '30px' }}>
                            <td>
                                <b>Liste des departement?</b>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <FormAjout set={this.setDep} add={this.addDep} />
                            </td>
                        </tr>
                        {this.state.departs.list.length > 0 ? this.state.departs.list.map((d, i) =>
                            <DepDetails key={i} dep={d} index={i} supp={this.suppDep} />
                        ) : <tr><td>svp! ajouter un nouveau département</td></tr>}
                    </tbody>
                </table >
            </>
        );
    }
}

export default ListDeparts;