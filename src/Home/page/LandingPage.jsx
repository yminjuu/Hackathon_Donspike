import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import bg1 from '../assets/background.svg';
import styled from 'styled-components';

const LandingPage = () => {
  const SectionStyle1 = {
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${bg1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const SectionStyle2 = {
    height: '100vh',
    width: '100%',
    backgroundColor: '#EBEEFF',
  };

  const PageHeader = styled.div`
    width: 100%;
    height: 9.375rem;
    flex-shrink: 0;

    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-top: 10rem;
    background: #fff;
  `;

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={{ ...SectionStyle1 }}>
          <h1>Screen 1</h1>
        </FullpageSection>
        <FullpageSection style={{ ...SectionStyle2 }}>
          <PageHeader></PageHeader>
          <h1>Screen 2</h1>
        </FullpageSection>
        <FullpageSection style={{ ...SectionStyle2 }}>
          <PageHeader></PageHeader>
          <h1>Screen 3</h1>
        </FullpageSection>
        <FullpageSection style={{ ...SectionStyle1 }}>
          <h1>Screen 4</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default LandingPage;
