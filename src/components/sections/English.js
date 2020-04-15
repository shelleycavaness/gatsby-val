import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const English = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "3workers" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "team" }
          name: { eq: "building" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
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
      <Section id="english">
        <Container>
          <Grid>
            <div>
              <h2>Speed past the competition with our help</h2>
              <p>
              The human dimension is at the center of our practice. Speaking the same language as our all stakeholders is essntial, whether they are legal counsel, legal professionals, human resources managers or directors, is our goal to create a climate of trust that favors sustainable and constructive collaboration. Aware of the unique problems encountered by start-ups and growing companies in managing their social and HR issues, we have also a specific support of offerings.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Our Specializations and Expertise</h2>
              <p>
              Collective bargaining and labour relations.
              </p><br/>
              <p> 
              Social management of mergers and acquisitions
              </p> <br/>
              <p>
              Pensions and insurance benefit schemes
              </p> <br/>
              <p>
              Individual and collective disputes
              </p><br/>
              <p>
              Social Security:URSAAF (Social Security contributions collections agency) disputes
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Common questions</h2>
              <ul>
              <li><p>les honoraires au temps passé-
                
                Chaque avocat a un tarif horaire, celui de Maître Kudar est de 250 € HT, soit 300 € TTC. Lorsque l’avocat facture au temps passé, il enregistre le temps qu’il passe sur un dossier et facture ce temps. Il est possible d’avoir une visibilité sur les honoraires payés au final en demandant à l’avocat une estimation du temps qu’il pense passer sur le dossier.
              </p> </li>   
              <li>  <p>
               les honoraires forfaitaires-
                Un forfait est prévu avec l’avocat dès le début (hors frais de déplacement et de procédure). Il est également possible de prévoir un forfait en fonction du travail qui sera effectué par l’avocat si l’on ne sait pas encore quel type de procédure va s’appliquer.
             </p></li>
             <li><p>
                les honoraires de résultat-
                L’avocat peut fixer un pourcentage qui sera dû en cas de succès et qui représente un pourcentage de la somme obtenue. Il est interdit de ne prendre que cet honoraire de résultat, il doit forcément être accompagné d’un honoraire fixe. Maître Kudar pratique souvent ce type d’honoraire dans ses dossiers de réparation du dommage corporel (accident de la route).
              </p> </li>
              </ul>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
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
    margin-bottom: 16px;
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

export default English;
