import Hero from "../Components/Hero"
import Section from "../Components/Section"
import Color from "../Components/Color"
import Typography from "../Components/Typography"

function Index() {
    return (
        <>
        <Hero />
        <Section title="01.Typography">
            <Typography />
        </Section>
        <Section title="02.Color">
            <Color colors={["white", "black-19", "black-39", "black-59", "black-79", "black-89", "black-100"]}/>
        </Section>

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