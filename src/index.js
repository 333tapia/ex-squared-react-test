import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Instructions from './Instructions';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Instructions />
    <App />
  </StrictMode>
);
