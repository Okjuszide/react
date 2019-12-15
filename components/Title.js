function Title( props ) {
    
    return (
        <>
        <div className="title">
            <h2>
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