import Hero from "../Components/Hero"
import Container from "../Components/Container"

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