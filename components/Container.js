import { Component } from 'react'
import Section from "./Section"
import Color from "./Color"
import Headings from "./Headings"
import Paragraph from './Paragraph'
import Menu from './Menu'

const whiteToBlack = [
    "white", 
    "rgba(0,0,0, .19)",
    "rgba(0,0,0, .39)", 
    "rgba(0,0,0, .59)", 
    "rgba(0,0,0, .79)", 
    "rgba(0,0,0, .89", 
    "black"
]

class Container extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            font: 'sans-serif',
            color: [
                'rgba(0, 0, 255, .3)',
                'rgba(0, 0, 255, .7)',
                'blue'
            ]
        }

        this.changeFont = this.changeFont.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }

    changeFont(e) {
        this.setState({
            font: e.target[e.target.selectedIndex].value
        })
    }

    changeColor(e) {

        let hex = e.target.value.replace('#','');
        let r = parseInt(hex.substring(0,2), 16);
        let g = parseInt(hex.substring(2,4), 16);
        let b = parseInt(hex.substring(4,6), 16);
            
        this.setState({
            color: [
                `rgba(${r}, ${g}, ${b}, .3)`,
                `rgba(${r}, ${g}, ${b}, .7)`,
                `rgb(${r}, ${g}, ${b})`
            ]
        })
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
                <Color colors={ whiteToBlack }/>
                <Color colors={ this.state.color } />
            </Section>
            </>
        )
    }
}

export default Container