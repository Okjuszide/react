function Color( {colors} ) {

    return (
        <div className="color">
            { colors.map(( item, key ) => {
                return <div key={ key } className='box' style={{ backgroundColor: item }}></div>
            })}

            <style jsx>{`
                .color {
                    display: flex;
                    margin: 0 4em;
                }
                .box {
                    width: 10em;
                    height: 10em;
                    border: 1px solid black;
                    margin: 5px;
                }
            `}</style>
        </div>
    )
}

export default Color