import React from 'react'

class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      loading: false
    }
  }

  componentDidMount() {
    this.props.mounted()
    
    // simulate some async behavior, a network call, perhaps
    // this.setState({ loading: true }, () => {
    //   setTimeout(() => {
    //     this.setState({ loading: false })
    //   }, 200)
    // })
  }

  componentDidUpdate() {
    this.props.updated()
  }

  componentWillUnmount() {
    this.props.unmounted()
  }

  renderTitle = id => (
    <h1 className="modal__title">Modal: {id}</h1>
  )

  renderCloseButton = close => (
    <button onClick={close} className='close__button'>
      close
    </button>
  )

  render() {
    const { close, id } = this.props
    
    const showHideClassName = this.props.open 
      ? "modal display-block" 
      : "modal display-none"
    
    return (
      <div>
        <div className={showHideClassName}>
          <section className="modal-main">
            {
              this.state.loading 
                ? 'loading...'
                : <div>
                    { this.renderTitle(id) }
                    { this.renderCloseButton(close) }
                  </div>
            }
          </section>
        </div>
      </div>
    )
  }
}

export default Modal