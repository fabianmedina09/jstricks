import React, { ReactElement, forwardRef } from 'react';
import './style.css';
import { render } from 'react-dom';
import ChannelCopy from './ChannelCopy';
import './src/Video1';

function App(): ReactElement {
  return <ChannelCopy />;
}

render(<App />, document.getElementById('root'));
