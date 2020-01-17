import Hero from "../components/Hero"
import Container from "../components/Container"

function Index() {
    return (
        <>
        <Hero />
        <Container />

        <style jsx global>{`
            * {
                margin: 0;
                padding: 0;
            }
            
            html {
                font-size: 62.5%;
                font-family: Roboto, Arial, Sans-serif;
            }
        `}</style>
        </>
    )
}

export default Index