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
                <Color colors={["white", "black-19", "black-39", "black-59", "black-79", "black-100"]} />
            </Section>
        </>
    )
}

export default Index
