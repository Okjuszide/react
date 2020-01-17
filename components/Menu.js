import { Component } from 'react'

class Menu extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <button onClick={ this.props.changeFont }>Click</button>
                    </li>
                    <select name="colors" onChange={this.props.changeColor}>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                    </select>
                </ul>
            </nav>
        )
    }
}

export default Menu