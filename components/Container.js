import { Component } from 'react'
import Section from "./Section"
import Color from "./Color"
import Headings from "./Headings"
import Paragraph from './Paragraph'
import Menu from './Menu'

class Container extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            font: 'sans-serif',
            color: [
                'rgba(0, 0, 255, .3)',
                'rgba(0, 0, 255, .8)',
                'blue'
            ]
        }

        this.changeFont = this.changeFont.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }

    changeFont() {
        this.setState({
            font: (this.state.font == 'serif' ? 'sans-serif' : 'serif')
        })
    }

    changeColor(e) {
        switch(e.target.value) {
            case 'red':
                this.setState({
                    color: [
                        'rgba(255, 0, 0, .3)',
                        'rgba(255, 0, 0, .8)',
                        'red'
                    ]
                })
            break;
            case 'blue': 
                this.setState({
                    color: [
                        'rgba(0, 0, 255, .3)',
                        'rgba(0, 0, 255, .8)',
                        'blue'
                    ]
                })
            break;
            default: 
                this.setState({
                    color: [
                        'rgba(0, 0, 255, .3)',
                        'rgba(0, 0, 255, .8)',
                        'blue'
                    ]
                })
        }
    }

    render() {
        return (
            <>
            <Menu changeFont={this.changeFont} changeColor={ this.changeColor }/>
            <Section title="01.Typography">
                <Headings font={ this.state.font } />
                <Paragraph font={ this.state.font }/>
            </Section>
            <Section title="02.Color">
                <Color colors={["white", "rgba(0,0,0, .19)", "rgba(0,0,0, .39)", "rgba(0,0,0, .59)", "rgba(0,0,0, .79)", "rgba(0,0,0, .89", "black"]}/>
                <Color colors={ this.state.color } />
            </Section>
            </>
        )
    }
}

export default Container