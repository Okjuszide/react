import { Component } from 'react'

class Headings extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="headings">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>

                <style jsx>{`
                    h1, h2, h3, h4, p {
                        font-family: ${this.props.font}
                    }

                    .headings {
                        width: 30em;
                        margin: 2em;
                    }

                    h1 {
                        font-size: 5.6em;
                    }
                    h2 {
                        font-size: 4.2em;
                    }
                    h3 {
                        font-size: 3.15em;
                    }
                    h4 {
                        font-size: 2.3625em;
                    }
                `}</style>
            </div>
        )
    }
}

export default Headings