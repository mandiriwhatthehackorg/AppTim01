import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';

import JWTStore from './src/mobx/JWTStore';
import rootNavigator from './src/router/';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  render() {
    const isLoggedIn = JWTStore.isAvailable();
    const Layout = createAppContainer(rootNavigator(isLoggedIn));
    return <Layout/>;
  }
}

export default App;