function Hero() {
    let heroStyle = {
        height: "15em",
        backgroundColor: "rgba(0, 0, 0, 0.79)"
    },
        h1Style = {
        fontSize: "5.6em",
        color: "lightblue"
    }


    return  (
        <div className="hero" style={ heroStyle }>
            <h1 style={h1Style}>Style guide</h1>
        </div>
    )
}

export default Hero