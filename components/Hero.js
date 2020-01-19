function Hero() {
    return (
        <>
        <div className="hero">
            <h1>Style Guide</h1>
        </div>
        
        <style jsx>{`
            .hero {
                height: 15em;
                background-color: rgba(0, 0, 0, 0.79);
            }

            .hero > h1 {
                font-size: 5.6em;
                color: white;
                font-weight: lighter;
                padding: .5em;
            }

            .hero > h1:after {
                content: "";
                position: absolute;
                top: 1.05em;
                left: 6em;
                width: 65%;
                height: 3px;
                background-color: white;
            }
        `}</style>
        </>
    )
}

export default Hero
