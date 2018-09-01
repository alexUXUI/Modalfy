import React from 'react'
import { ModalContainer } from '../modal.container'
import Modal from '../modal.component'
import { mount } from 'enzyme'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Modal Container testing Suite', () => {

  let testModal
  let ID = 10

  const clickButton = button => {
    return testModal
      .find(button)
      .simulate('click')
  }

  beforeEach(() => {
    testModal = mount(
      <ModalContainer 
        id={ID}
        mounted={() => console.log('Component lifecycle hook: mounted')}
        updated={() => console.log('Component lifecycle hook: updated')}
        unmounted={() => console.log('Component lifecycle hook: unmounted')}
      />
    )
  })
  
  it('It has an open button', () => {
    expect(testModal.find('button')).toHaveLength(1);
  })

  it('Modal is intially closed', () => {
    expect(testModal.state()).toEqual({ open: false })
  })

  it('Clicking the button updates state', () => {
    clickButton('button') 
    expect(testModal.state()).toEqual({ open: true })
  })

  it('Displays the correct ID in title', () => {
    clickButton('button') 
    expect(testModal.find('.modal__title').text()).toBe(`Modal: ${ID}`)
  })

  it('It has a close button', () => {
    clickButton('button') 
    expect(testModal.find('.close__button')).toHaveLength(1);
  })

  it('Close button updates state when clicked', () => {
    clickButton('button') 
    expect(testModal.state()).toEqual({ open: true })

    clickButton('.close__button') 
    expect(testModal.state()).toEqual({ open: false })
  })
})

