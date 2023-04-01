import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    {/* <BrowserRouter> */}
      <CssBaseline />
      <App/>
    {/* </BrowserRouter> */}
  </StyledEngineProvider>,
  document.getElementById('root')
);

