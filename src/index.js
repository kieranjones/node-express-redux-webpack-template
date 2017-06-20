import React, { PropTypes, Component } from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';

import { AppContainer } from 'react-hot-loader';

class IndexApp {

constructor() {

    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    );

    if (module.hot) {

      module.hot.accept('./components/app.jsx', () => {

        require('./components/app.jsx');

        render(
          <AppContainer>
            <App />
          </AppContainer>,
          document.getElementById('app')
        );
      });
    }
  }
}

export default new IndexApp();