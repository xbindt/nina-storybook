import { createGlobalStyle } from 'styled-components';

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: Agenda;
    src:
      url('../fonts/Agenda/AgendaThin.woff2?v=Enexis.1.0') format('woff2'),
      url('../fonts/Agenda/AgendaThin.woff?v=Enexis.1.0') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Agenda;
    src:
      url('../fonts/Agenda/AgendaLight.woff2?v=Enexis.1.0') format('woff2'),
      url('../fonts/Agenda/AgendaLight.woff?v=Enexis.1.0') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Agenda;
    src:
      url('../fonts/Agenda/AgendaMedium.woff2?v=Enexis.1.0') format('woff2'),
      url('../fonts/Agenda/AgendaMedium.woff?v=Enexis.1.0') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: Agenda;
    src:
      url('../fonts/Agenda/AgendaBold.woff2?v=Enexis.1.0') format('woff2'),
      url('../fonts/Agenda/AgendaBold.woff?v=Enexis.1.0') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;
export default GlobalFont;