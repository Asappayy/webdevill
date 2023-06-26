import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'NodeJs', text: 'Technology Used To Instruct Back-End Codes & Databases'},
  { number: 'Express', text: 'Framework Used To Facilitate My Nodejs Dexterity', },
  { number: 'React', text: 'React Enables Me To Write HTML & CSS as JavaScript Logic / Components', },
  { number: 'Next', text: 'This is a Framework Technology That Enables Me To "React" More Magic', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
