import React, {Fragment} from 'react';
import { Column, Row, Heading } from 'enexis-ui';

const Intro = ()=> (
    <Fragment>
      <Row>
        <Column mobile={12} tablet={6}>
          <Heading>Een</Heading>
          een
        </Column>
        <Column mobile={12} tablet={6}>
         twee
        </Column>
      </Row>
    </Fragment>
  );

export default Intro;