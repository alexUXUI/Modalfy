import React from 'react'
import Modal from './modal.component';
import './styles/modal.css'

export class ModalContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    // private methods
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)

    /**
     * public / overridable methods 
     * user can pass functions for lifecycle hooks
     * or fall back to default 
     */
    this.mounted = this.props.mounted.bind(this) || this.mounted.bind(this) 
    this.updated = this.props.updated.bind(this) || this.updated.bind(this)
    this.unmounted = this.props.unmounted.bind(this) || this.unmounted.bind(this)
  }

  open() {
    this.setState({ open: true })
  }

  close() {
    this.setState({ open: false })
  }

  mounted() {
    // console.log('Mounted function default')
  }

  updated() {
    // console.log('Updated function default')
  }

  unmounted() {
    // console.log('Unmounted function default')
  }

  renderModal(open, id) {
    return (
      <Modal 
        id={id}
        open={open} 
        close={this.close}
        updated={this.updated}
        mounted={this.mounted}
        unmounted={this.unmounted}
      />
    )
  }

  render () {

    const { open } = this.state
    const { id } = this.props

    return (
      <div>
        { open ? this.renderModal(open, id) : null }
        <button onClick={this.open}>open</button>
      </div>
    )
  }
}