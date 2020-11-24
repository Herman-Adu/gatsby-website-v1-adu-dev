import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinkWrapper>
                <FooterDesc>
                    <h1>Explorix</h1>
                    <p>We strive to create the best experience for our customers</p>
                </FooterDesc>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to="/about">About</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Destinations</FooterLink>
                        <FooterLink to="/">Sponsorship</FooterLink>
                    </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
                 <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/">Submit Video</FooterLink>
                        <FooterLink to="/">Ambassadors</FooterLink>
                        <FooterLink to="/">Agency</FooterLink>
                        <FooterLink to="/">Influencer</FooterLink>
                    </FooterLinkItems>
                     <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                    </FooterLinkItems>
            </FooterLinkWrapper>

        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #FAFAFB;
`

const FooterLinkWrapper = styled.div`  
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr
    }
`

const FooterDesc = styled.div`
    padding: 0 2rem;
    
    h1 {
        margin-bottom: 3rem;
        color: #F26A2E;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
`

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom:  16px;
`

const FooterLink = styled.div`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3D3D4E;
    cursor: pointer;

    &:hover {
        color: #F26A2E;
        transition: 0.3s ease-out;
    }
`

