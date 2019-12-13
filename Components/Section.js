import Title from "./Title"


function Section(props) {
    return (
        <>
            <section className="container" >
                <Title title={props.title}/>
                <div className="content">
                    {props.children}
                </div>
            </section>
            <style jsx>{`
                .container {
                    display: flex;
                }
                p {
                    font-size: 1.8em;
                  }
                .content {
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 100em;
                }
                .content > div {
                    padding: 30px;
                }  

            `}</style>
        </>
    )
}

export default Section