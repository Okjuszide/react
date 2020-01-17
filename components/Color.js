function Color( {colors} ) {

    return (
        <div className="color">
            { colors.map(( item, key ) => {
                return <div key={ key } className='box' style={{ backgroundColor: item }}></div>
            })}

            <style jsx>{`
                .color {
                    display: flex;
                }

                .box {
                    width: 10em;
                    height: 10em;
                    border: 1px solid black;
                  }

                .white {
                    background-color: rgba(0, 0, 0, 0);
                }

                .black-19a {
                    background-color: rgba(0, 0, 0, 0.19);
                }

                .black-39a {
                    background-color: rgba(0, 0, 0, 0.39);
                }

                .black-59a {
                    background-color: rgba(0, 0, 0, 0.59);
                }
                .black-79a {
                    background-color: rgba(0, 0, 0, 0.79);
                }

                .black-89a {
                    background-color: rgba(0, 0, 0, 0.89);
                }

                .black-100a {
                    background-color: black;
                }

                .primary {
                    background-color: #039be5;
                }

                .primary-light {
                    background-color: #63ccff;
                }

                .primary-verylight {
                    background-color: #baeeff;
                }

                .primary-dark {
                    background-color: #006db3;
                }



            `}</style>
        </div>
    )
}

export default Color
