import React from 'react';
import { storiesOf } from '@storybook/react';
import Intro from './Intro';

storiesOf('Foundation/Components', module)
  .add('Intro', () => (
    <Intro />
  ));