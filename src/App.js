import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme/theme';
import SignIn from './containers/Auth/SignIn';
import ForgotPassword from './containers/Auth/ForgotPassword';
import ForgotPasswordNextStep from './containers/Auth/ForgotPasswordNextStep';
import MainContent from './containers/MainContent';
import routes from './constants/routes';
import 'react-toastify/dist/ReactToastify.css';
import {getAuthService} from './actions/microAction';

function App() {
  const {isAuthorized} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthService());
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        {!isAuthorized ? (
          <>
            <Redirect to={routes.SIGN_IN} />
            <Route path={routes.SIGN_IN} component={SignIn} />
            <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
            <Route exact path={routes.FORGOT_PASSWORD_NEXTSTEP} component={ForgotPasswordNextStep} />
          </>
        ) : (
          <>
            <Redirect to={routes.DASHBOARD} /> }
            <Route path={routes.SIGN_IN} component={SignIn} />
            <Route exact path={routes.FORGOT_PASSWORD} component={ForgotPassword} />
            <Route exact path={routes.FORGOT_PASSWORD_NEXTSTEP} component={ForgotPasswordNextStep} />
            <Route>
              <MainContent />
            </Route>
          </>
        )}
        <Route path="/" render={()=> !isAuthorized ? <Redirect to={routes.SIGN_IN} />: <Redirect to={routes.DASHBOARD} /> } />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
