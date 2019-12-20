import { Component } from 'react'

class Menu extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <button onClick={ this.props.handleClick }>Click</button>
                    </li>
                    <select>
                        <option value="red">red</option>
                        <option value="blue">red</option>
                    </select>
                </ul>
            </nav>
        )
    }
}

export default Menu