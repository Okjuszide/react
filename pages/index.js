import Section from '../components/Section'
import Hero from '../components/Hero'
import Title from '../components/Title'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Color from '../components/Color'


function Index() {


    return (
        <>
            <Hero />
            <Section title="01. Typography">
                <Heading />
                <Paragraph />
            </Section>
            <Section title="02. Color">
                <Color colors={ ["0", "0.19", "0.39", "0.59", "0.79", "1"] } />
            </Section>
        </>
    )
}

export default Index
