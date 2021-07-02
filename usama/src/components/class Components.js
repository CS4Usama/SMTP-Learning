import { Component } from "react";


class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stdName: "Usama",
            stdList: ["Usama", "Ali", "Ghous"]
        }
    }
    ctaHandler = (e) => {
        this.setState({stdName: e.target.value})
    }

    render() {
        const {stdName} = this.state;

        return(
            <div>
                {/* <p>Student Name is: {this.state.stdName}</p> */}
                <p>Student Name is: {stdName}</p>
                <input onChange={this.ctaHandler} />
                {/* <input onChange={(e)=>this.setState({stdName:e.target.value})} /> */}

                {
                    this.state.stdList.map((stdName) => {
                        return <p>{stdName}</p>
                    })
                }

            </div>
        )

    }
}

export default ClassComp;