import Title from "./Title"

function Section(props) {
    let ctnrStyle = {
            display: "flex",
            flexDirection: "row"
        },
        ctntStyle = {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            maxWidth: "100em"
        }

    return (
        <section className="container" style={ ctnrStyle }>
            <Title title={props.title}/>
            <div className="content" style={ ctntStyle }>
                {props.children}
            </div>
        </section>
    )
}

export default Section