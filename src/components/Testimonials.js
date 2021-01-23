import React, { useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

const Testimonials = () => {
    useEffect(() => {
        Aos.init({})
    }, [])
    
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
                name: {in: ["testimonial-1", "testimonial-2"] }}) {
                edges {
                    node {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <TestimonialsContainer>
            <TopLine
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                Testimonials
            </TopLine>
            <Description
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                what people are saying
            </Description>
            <ContentWrapper>
                <ColumOne>
                    <Testimonial
                        data-aos="fade-right"
                        data-aos-delay="150"
                        data-aos-duration="1200"
                    >
                        <IoMdCheckmarkCircleOutline
                            css={`
                                color: #3FFFA8;
                                font-size: 2rem;
                                margin-bottom: 1rem;                            
                            `}
                        />
                        <h3>Sean Michaels</h3>
                        <p>The greatest experience of my life! it was so much fun absailng down the front of waterfull wonders.
                            I always felt safe and the staff were well trained and new what they were doing
                            <br /><br />                        
                            The Staff and the people theiri made it super easy to book and the service was amazing oooooo.
                            <br /><br />
                            Loved the accomodation
                        </p>
                    </Testimonial>
                    <Testimonial
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                    >
                        <FaRegLightbulb 
                            css={`
                                    color: #3FFFA8;
                                    font-size: 2rem;
                                    margin-bottom: 1rem;
                                
                                `} />
                        <h3>Sarah Adu</h3>
                        <p>It was so easy to set up my trip! They answered all my questions
                            right away and gave me the best price out of all the companies i researched
                        </p>
                    </Testimonial>
                </ColumOne>
                <ColumnTwo
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="1200"
                >
                    {data.allFile.edges.map((image, key) => (
                        <Images 
                            key={key} 
                            fluid={image.node.childImageSharp.fluid} 
                        />
                    ))}                    
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    background: #FCFCFC;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
`

const TopLine = styled.p`
    color: #077BF1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`

const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ColumOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
    padding: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p {
        color: #3B3B3B;
    }
`

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top:2rem;
    grid-gap: 10px;

    @media screen and (max-witdh: 500px) {
        grid-template-columns: 1fr;
    }    
`

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%
`