import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import MapContact from './MapContact';
import ExternalLink from '@common/ExternalLink';


import { Section, Container } from '@components/global';


const ContactMe = () => (
    <StaticQuery
      query={graphql`
        query {
          art_story: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "val_id" }
          ) {
            childImageSharp {
              fluid(maxWidth: 760) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <Section id="contact" >
         <Container>
          <Grid>
            <div>
              <h2>Comment Contacter Val</h2>
            </div>
            <Art>
              <Img fluid={data.art_story.childImageSharp.fluid} />
            </Art>
            <p>Tel. 0000000000000</p> 
            <p>Email : @superVal.com </p>
            
          </Grid>
          <Grid>
          <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=48%20rue%20de%20paris%20boulogne%20france&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
           
          </Grid>
          <h3> 48 Rue de Paris 92100 Boulogne-Billancourt</h3> 
          </Container> 
        </Section>
      )}
    />
  );

  const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;
   

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 1px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;


// background-color: ${props => props.theme.color.primary}; 
export default ContactMe;