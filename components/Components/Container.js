import { Component } from 'react'
import Section from "../Components/Section"
import Color from "../Components/Color"
import Headings from "../Components/Headings"
import Paragraph from '../Components/Paragraph'
import Menu from '../Components/Menu'

class Container extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            font: 'sans-serif',
            color: [
                'red',
                'rgba( 255, 0, 0, 0, .5 )',
                'redDark'
            ]
        }

        this.changeFont = this.changeFont.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }

    changeFont(event) {
        this.setState({
            font: (this.state.font == 'serif' ? 'sans-serif' : 'serif')
        })
    }

    changeColor(event) {
        console.log(e.target.value)

        switch(e.taget.value) {
            case 'red':
                this.setState({
                    color: [
                        'red',
                        'rgba( 255, 0, 0, 0, .5 )',
                        'rgba( 255, 0, 0, 0, .8 )'
                    ]
                })
            break
            case 'red': 
                this.setState({
                    color: [
                        'red',
                        'rgba( 0, 255, 0, 0, .5 )',
                        'rgba( 0, 255, 0, 0, .8 )'
                    ]
                })
            default: 
                this.setState({
                    color: [
                        'red',
                        'rgba( 255, 0, 0, 0, .5 )',
                        'rgba( 255, 0, 0, 0, .8 )'
                    ]
                })
            break
        }
    }

    render() {
        return (
            <>
            <Menu changeFont={this.chagneFont} changeColor={ this.changeColor }/>
            <Section title="01.Typography">
                <Headings font={ this.state.font } />
                <Paragraph font={ this.state.font }/>
            </Section>
            <Section title="02.Color">
                <Color colors={["white", "black-19a", "black-39a", "black-59a", "black-79a", "black-89a", "black-100a"]}/>
                <Color colors={ this.state.color } />
            </Section>
            </>
        )
    }
}

export default Container