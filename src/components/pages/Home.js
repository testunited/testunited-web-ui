import React from 'react'
import AppContext from '../../AppContext'

export default function Home() {
    return (
      <AppContext.Consumer>
      {({ application, setApplication }) => (       <React.Fragment>
            <h1>Welcome to TestUnited for {application.name}</h1>
            <p>This is a todo list</p>
        </React.Fragment>)}
        </AppContext.Consumer>
    )
}
