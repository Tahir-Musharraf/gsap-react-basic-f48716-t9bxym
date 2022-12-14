import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { HowToSection } from './App';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HowToSection />
  </StrictMode>
);
