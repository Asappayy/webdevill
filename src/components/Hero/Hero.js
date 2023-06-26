import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm Samienana <br />
          This is My Portfolio
        </SectionTitle>
        <SectionText>
        My Nomenclature remains O.S Afolayan, I'm a Software Engineer | Innovating Solutions at the Intersection of Technology and Digital Transformation with React, Vite & Next.js        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;