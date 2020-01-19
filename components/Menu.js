import { Component } from 'react'

var obj = {
    fonts: [
        'Sans-serif',
        'Serif'
    ],
}

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show
        })
    }

    

    render() {
        return(
            <nav className="menu">

                <div className="hamburger" onClick={this.handleClick}>
                    <span className={this.state.show && 'show'}/>
                </div>

                <ul>
                    <li>
                        <select name="fonts" onChange={this.props.changeFont}>
                            {obj.fonts.map( font =>
                                <option
                                    style={{font}} 
                                    value={font}
                                >
                                    {font}
                                </option>
                            )}
                        </select>
                    </li>
                    <li>
                        <input type="color" onChange={this.props.changeColor}></input>
                    </li>
                </ul>

                <style jsx>{`
                    .menu {
                        position: fixed;
                        right: 0;
                        background-color: white;
                        border: 2px solid black;
                        background-color: white;
                        border-top: 2px solid black;
                        border-left: 2px solid black;
                        border-bottom: 2px solid black;
                        border-right: 2px solid black;
                        padding-bottom: 4px;
                    }
                    .menu > ul {
                        display: ${this.state.show ? 'block' : 'none'};
                        list-style: none;
                    }
                    .menu > ul > li {
                        padding: 20px;
                    }
                    .hamburger {
                        position: relative;
                        width: 62px;
                        height: 62px;
                        cursor: pointer;
                        ${this.state.show && 'border: none'}
                    }
                    .hamburger span {
                        position: absolute;
                        margin-top: 31px;
                        left: 10px;
                        width: 42px;
                        height: 2px;
                        display: block;
                        background-color: black;
                    }
                    .hamburger span:before {
                        content: "";
                        position: absolute;
                        left: 0px;
                        top: -15px;
                        
                        width: 42px;
                        height: 2px;
                        background-color: black;
                    }
                    .hamburger span:after {
                        content: "";
                        position: absolute;
                        left: 0px;
                        top: 15px;
                        width: 42px;
                        height: 2px;
                        background-color: black;
                    }

                `}

                </style>
            </nav>
        )
    }
}

export default Menu