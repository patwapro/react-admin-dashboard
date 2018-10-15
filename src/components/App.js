import React from 'react';
import withRoot from '../withRoot';
import Header from './Header';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default withRoot((App));
