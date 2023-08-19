import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: {},
    password: {},
    isCredentialValid: true,
  }

  onChangeUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  renderUserNameField = () => (
    <>
      <div className="label-container">
        <label htmlFor="usernameInput">USERNAME</label>
      </div>
      <input
        placeholder="USERNAME"
        type="text"
        id="usernameInput"
        className="username-and-password-input"
        onChange={this.onChangeUsernameInput}
      />
    </>
  )

  renderPasswordField = () => (
    <>
      <div className="label-container">
        <label htmlFor="passwordInput">Password</label>
      </div>
      <input
        placeholder="PASSWORD"
        type="password"
        id="passwordInput"
        className="username-and-password-input"
        onChange={this.onChangePasswordInput}
      />
    </>
  )

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)

    const isSubmissionSuccess = response.ok
    if (isSubmissionSuccess === false) {
      this.setState({isCredentialValid: false})
    } else {
      this.setState({isCredentialValid: true})
      this.onSubmitSuccess()
    }
  }

  render() {
    const {isCredentialValid} = this.state

    const appropriateClassToShowError = isCredentialValid ? 'd-none' : ''

    return (
      <div className="login-form-container">
        <div className="login-page-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt=""
            className="header-image"
          />
        </div>
        <div className="banner-and-form-container">
          <div className="banner-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="login-img"
            />
          </div>

          <div className="form-container">
            <div className="form-top-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="header-image"
              />
            </div>
            <form onSubmit={this.onSubmitLoginForm}>
              <div className="input-fields-and-label-container">
                {this.renderUserNameField()}
              </div>

              <div className="input-fields-and-label-container">
                {this.renderPasswordField()}
              </div>

              <button className="login-button" type="submit">
                Login
              </button>
              <p className={`error-msg ${appropriateClassToShowError}`}>
                *Username and Password didn't match
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
