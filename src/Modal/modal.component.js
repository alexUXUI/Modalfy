import React from 'react'

export default class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      loading: false
    }
  }

  componentDidMount() {
    this.props.mounted()
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

  renderContent = content => (
    <span>{content}</span>
  )

  render() {
    const { close, id, content, loadingIndicator } = this.props
    
    const showHideClassName = this.props.open 
      ? "modal display-block" 
      : "modal display-none"
    
    return (
      <div>
        <div className={showHideClassName}>
          <section className="modal-main">
            {
              this.state.loading
                ? <span>{ loadingIndicator }</span>
                : <span>
                    { this.renderTitle(id) }
                    { this.renderContent(content) }
                    { this.renderCloseButton(close) }
                  </span>
            }
          </section>
        </div>
      </div>
    )
  }
}
