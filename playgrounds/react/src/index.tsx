import React from 'react';
import ReactDOM from 'react-dom';

import {BetButton} from '@iprorg/react-ui';

ReactDOM.render(
  <>
    <BetButton label="Primary button" />
    <BetButton type="secondary" label="secondary button" />
  </>,
  document.querySelector('#root')
)
