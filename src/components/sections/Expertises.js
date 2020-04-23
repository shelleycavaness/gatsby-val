import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const EXPERTISES = [
    {
        name: 'Droit social',
        image: 'chessmate.jpg',
        role: 'Contrats et conventions collectives - négociations et Conflits du travail - droit et contentieux de la sécurite sociale',
    },
    {
        name: 'Droit de protection sociale',
        image: 'signature_square.jpg',
        role: 'Préservation Santé et sécurité  Traitement et litiges de sécurité sociale Gestion des droits et reconstition des parcours de carrière, mobilité internationale simulation retraite.',
    },
    {
        name: 'Audit juridique et social',
        image: 'w1.jpg',
        role: ' Aspects juridiques, sociaux et organisationnels des restructurations. Stratégie organisation et délégations Gestion de crise et de conflits .',
    },
    {
        name: 'Gestion des risques et des responsabilités',
        image: 'w2.jpg',
        role: 'Gestion des risques et des responsabilités',
    },
    {
        name: 'Droit des affaires/contrats droit civil',
        image: 'stairs.jpg',
        role: 'Accompagnement droit des sociétés , associations , et groupes  Conseil, négociation contentieux ',
    },
    {
        name: 'Audit juridique et social',
        image: 'pen.jpg',
        role: 'ociaux et organisationnels des restructurations Stratégie organisation et délégations Gestion de crise et de conflits .',
    },
];

const Expertises = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="expertises" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Domaines d'interventions</h1>
          <SkillGrid>
            {EXPERTISES.map(({ name, image, role }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </SkillGrid>
        </Container>
      </Section>
    )}
  />
);

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Expertises;
