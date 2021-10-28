import React from "react"
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "test"
        }
    }
    render() {
        return (
            <>
                {this.state.text}
            </>
        );
    }
}

export default Demo;