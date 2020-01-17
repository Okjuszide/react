import { Component } from 'react'
import Paragraph from './Paragraph'
import Headings from './Headings'

class Typography extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            font: 'serif'
        }
        this.handleClick = this.handleClick.bind( this )
    }

    handleClick() {
        if(this.state.font == "serif") {
            this.setState({ font: "sans-serif" })
        } else {
            this.setState({ font: "serif" })       
        }
    }

    render() {
        return (
            <>
            <Headings font={ this.state.font } />
            <Paragraph font={ this.state.font }/>
            <div>
                <button onClick={ this.changeFont }>Change font</button>
            </div>
            <div>
                <button onClick={ this.changeColor }>Change color</button>
            </div>
            </>
        )
    }
}

export default Typography