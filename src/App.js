import React from 'react'
import Modalfy from './Modal/modal.container';

const App = () => (
  <Modalfy
    id={10}
    mounted={modal => { 
      // do something async, 
      modal.setState({ loading: true }, () => { //setState on modal's state
        setTimeout(() => {
          modal.setState({ loading: false })
        }, 1000)
      })
    }}
    updated={modal => console.log(`Updated: ${modal}`)}
    unmounted={modal => console.log(`Unmounted: ${modal}`)}
    content={<div>Content to Modalfy</div>}
    loadingIndicator={<div>loading...</div>}
  />
)

export default App
