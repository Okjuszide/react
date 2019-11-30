function Title(props) {
    let titleStyle = {
            width: "25em",
            padding: "2em 3em",
            backgroundColor: "#63ccff",
            textAlign: "center",
            color: "rgba(0, 0, 0, 0.89)"
        },
        h2Style = {
            fontSize: "4.2em"
        }

    return (
        <div className="title" style={ titleStyle }>
            <h2 style={ h2Style }>{ props.title }</h2>
        </div>
    )
}

export default Title