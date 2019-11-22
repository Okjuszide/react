import Title from "./Title"

function Section(props) {
    return (
        <section className="container">
            <Title title={props.title}/>
            <div className="content">
                {props.children}
            </div>
        </section>
    )
}

export default Section