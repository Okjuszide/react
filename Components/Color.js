function Color( props ) {
    let arr = props.colors
    


    return (
        <div className="color">
            { arr.map( ( item ) => {
                return <div className={`box ${item}`}></div>
            })}
    
            <style jsx>{`

            `}</style>
        </div>
    )
}

export default Color