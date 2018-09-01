import React from 'react'
import { ModalContainer } from './Modal/modal.container';

const App = () => (
  <ModalContainer
    id={10}
    mounted={() => console.log('Component lifecycle hook: mounted')}
    updated={() => console.log('Component lifecycle hook: updated')}
    unmounted={() => console.log('Component lifecycle hook: unmounted')}
    content={<div>I am content</div>}
  />
)

export default App
