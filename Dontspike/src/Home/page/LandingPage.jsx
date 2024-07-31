import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

const LandingPage = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection style={{ height: '100vh' }}>
          <h1>Screen 1</h1>
        </FullpageSection>
        <FullpageSection style={{ height: '100vh' }}>
          <h1>Screen 2</h1>
        </FullpageSection>
        <FullpageSection style={{ height: '100vh' }}>
          <h1>Screen 3</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default LandingPage;
