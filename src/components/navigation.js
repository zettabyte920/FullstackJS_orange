import { Component } from "react"
class Navigation extends Component {
    render() {
        let arr = []
        for (let i = 1; i <= this.props.totalHits; i++) {
            arr.push(i);
        }

        return (
            <>
                { arr.map((index) =>
                    <button onClick={() => {
                        this.props.handelSearch(index)
                    }} key={index}>{index}</button>)}
            </>
        );
    }
}

export default Navigation;