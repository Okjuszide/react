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
            `}</style>
        </>
    )
}

export default Hero
