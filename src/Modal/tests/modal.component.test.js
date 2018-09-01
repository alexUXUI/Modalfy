import React from 'react'
import Modal from '../modal.component'
import { mount } from 'enzyme'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Modal Component testing Suite', () => {

  let testModal
  let ID = 10

  const clickButton = button => {
    return testModal
      .find(button)
      .simulate('click')
  }

  beforeEach(() => {
    testModal = mount(
      <Modal 
        id={ID}
        mounted={() => console.log('Component lifecycle hook: mounted')}
        updated={() => console.log('Component lifecycle hook: updated')}
        unmounted={() => console.log('Component lifecycle hook: unmounted')}
      />
    )
  })

  it('It has the right props an open button', () => {
    expect(testModal.props().id).toBe(10)
    expect(testModal.props().mounted).toBeDefined()
    expect(testModal.props().updated).toBeDefined()
    expect(testModal.props().unmounted).toBeDefined()
  })

})

