import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const About = () => (
  <Main
    meta={
      <Meta title={AppConfig.description} description={AppConfig.description} />
    }
  >
    <Content>
      <p>
        Hi all, welcome to jebLabs! This is my dog Samus. Check out{' '}
        <a href="https://instagram.com/SecretSamus">her Instagram.</a>
      </p>
      <img
        className="max-w-full h-auto rounded-lg shadow object-scale-down"
        alt="JB and Samus!"
        src="/assets/images/jb-and-sam.jpg"
      />
      <p>See you around. </p>
    </Content>
  </Main>
);

export default About;
