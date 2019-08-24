import React, { useContext } from 'react';
import AppContext from '../../AppContext';

class AppHeader extends React.Component {

  render() {
    return (
      <AppContext.Consumer>
        {({ application, setApplication }) => (
          (application != undefined)?
          <div><div>{application.id}</div></div>:
          <div>no application selected</div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default AppHeader;