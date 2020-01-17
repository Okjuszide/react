function Title( props ) {
    let h2Style = {
        fontSize: "2em",
        fontFamily: "Courier New",
        fontWeight: 300,
        textAlign: "center",
        paddingTop: "2.6em"
    }
    
    return (
        <>
        <div className="title">
            <h2 style={ h2Style }>
                { props.title }
            </h2>
        </div>
        <style jsx>{`
              .title {
                    width: 25em;
                    padding: 2em 3em;
                    background-color: #63ccff;
                    text-align: center;
                    color: rgba(0, 0, 0, 0.89);
              }
        `}</style>
        </>
    )
}

export default Title