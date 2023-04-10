import React from 'react';

import { AppWrapper } from './components/AppWrapper';

import { useRoutes } from 'react-router';
import { routes } from './routes';

const App = () => {
  const element = useRoutes(routes);

  return (
    <AppWrapper>
      {element}
    </AppWrapper>
  );
}

export default App;
