import { Component } from 'react'
import Paragraph from './Paragraph'
import Headings from './Headings'

class Typography extends Component {
    constructor(props) {
        super(props)
        this.state = {
            font: 'serif'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if(this.state.font == "serif") {
            this.setState({font: "sans-serif"})
        } else {
            this.setState({font: "serif"})       
        }
    }

    render() {
        return (
            <>
            <div>
                <button onClick={this.handleClick}>Change font</button>
            </div>
            <Headings font={this.state.font} />
            <Paragraph font={this.state.font}/>
            </>
        )
    }
}

export default Typography