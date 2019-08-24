import React, {createContext} from 'react';

const AppContext = createContext({
    application:{},
    setApplication: () => {}
});

export default AppContext