import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import styled from 'styled-components';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';

const LandingPage = () => {
  const SectionStyle1 = {
    height: '100vh',
    width: '100%',
    backgroundImage: `url('https://raw.githubusercontent.com/yminjuu/DONTSPIKE_FE/328516018febe495fa3f66b464cc9b82e25d8344/public/LandingBG.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const SectionStyle2 = {
    height: '100vh',
    width: '100%',
    backgroundColor: '#EBEEFF',
  };

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={{ ...SectionStyle1 }}>
          <Section1></Section1>
        </FullpageSection>
        <FullpageSection style={{ ...SectionStyle2 }}>
          <Section2></Section2>
        </FullpageSection>
        <FullpageSection style={{ ...SectionStyle2 }}>
          <Section3></Section3>
        </FullpageSection>
        <FullpageSection style={{ ...SectionStyle1 }}>
          <Section4></Section4>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default LandingPage;
