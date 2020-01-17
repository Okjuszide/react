import { Component } from 'react'

var obj = {
    fonts: [
        'Roboto',
        'Times New Roman',
        'Consolas',
        'Arial'
    ],
    colors: [
        
    ]
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

                    @keyframes burger-top{
                        0% {
                            top: -15px;
                            transform: rotate(0);

                        }

                        50% {
                            top: 0;
                            transform: rotate(0);

                        }

                        100% {
                            top: 0;
                            transform: rotate(-45deg);
                        }
                    }

                    @keyframes burger-bottom{
                        0% {
                            top: 15px;
                            transform: rotate(0deg);

                        }

                        50% {
                            top: 0;
                            transform: rotate(0deg);
                        }

                        100% {
                            top: 0;
                            transform: rotate(45deg);
                        }
                    }

                    .burger span.show:before {
                        transform: rotate(-45deg);
                        transition: all 280ms ease-in-out 280ms;
                        top: 0;
                        animation: 560ms ease-in-out 0s burger;
                    }

                    .burger span.show:after {
                        transform: rotate(-45deg);
                        transition: all 280ms ease-in-out 280ms;
                        top: 0;
                        animation: 560ms ease-in-out 0s burger;
                    }
                `}

                </style>
            </nav>
        )
    }
}

export default Menu