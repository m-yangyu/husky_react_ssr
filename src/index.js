import { hydrate } from 'react-dom';
import React from 'react';
import App from './app';

const rootEl = document.getElementById('root');

hydrate( <App compiler="TypeScript" framework="React" /> , rootEl);