import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { createTheme, GlobalStyle } from 'enexis-ui';
import GlobalFont from '../src/core/GlobalFont';

// Create styled components theme
const myTheme = createTheme({
  typography: {
    fontFamily: [
      'Agenda',
      'Trebuchet MS',
      'Roboto',
      'Arial',
      'Helvetica',
      'sans-serif',
    ].join(','),
  },
});



addDecorator(getStory => (
  <ThemeProvider theme={myTheme}>
    <GlobalStyle />
    <GlobalFont/>
    {getStory()}
  </ThemeProvider>
));

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.(jsx|js)$/), module);
