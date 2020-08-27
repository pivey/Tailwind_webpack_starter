import React from 'react';
import ReactDOM from 'react-dom';
import './assets/tailwind.css';
import './assets/styles.css';
import { AppContainer, StyledForm, GlobalStyle } from './styles/index';
import * as serviceWorker from './serviceWorker';

const Index = () => (
  <>
    <GlobalStyle />
    <React.StrictMode>
      <AppContainer>
        <StyledForm>
          <form>
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button type="button">Sign In</button>
          </form>
        </StyledForm>
      </AppContainer>
    </React.StrictMode>
  </>
);

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
