import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
        </ListContainer>
        <ListParagraph>
          Hands-on Experience <br />
          With React.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
        </ListContainer>
        <ListParagraph>
          Hands-on Experience <br />
          With Node.js & MongoDb
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
        </ListContainer>
        <ListParagraph>
          Hands-on Experience <br />
          With Figma, Ai & Ps
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
