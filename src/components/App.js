import React, { useState } from 'react'
import '../styles/App.css'

const App = () => {
  // const [userData, setUserData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   contact: '',
  // })
  // const [error, setError] = useState({
  //   userNameError: '',
  //   emailError: '',
  //   passwordError: '',
  //   contactError: '',
  // })
  const [successMessage, setSuccessMessage] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [contact, setContact] = useState('')

  const [userNameError, setUserNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [contactError, setContactError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    let hasError = false
    if (username.trim() === '') {
      setUserNameError('Username is required')
      hasError = true
    } else {
      setUserNameError('')
    }
    if (email.trim() === '') {
      setEmailError('Email is required')
      hasError = true
    } else {
      setEmailError('')
    }
    if (password.trim() === '') {
      setPasswordError('Password is required')
      hasError = true
    } else if (password.length < 4) {
      setPasswordError('Password must be at least 4 characters long')
      hasError = true
    } else {
      setPasswordError('')
    }
    if (contact.trim() === '') {
      setContactError('Contact number is required')
      hasError = true
    } else if (contact.length !== 10) {
      setContactError('Contact number must be exactly 10 digits')
      hasError = true
    } else {
      setContactError('')
    }
    if (!hasError) {
      setSuccessMessage('Registered Successfully')
      setUserName('')
      setEmail('')
      setPassword('')
      setContact('')
    }
  }

  return (
    <div id="main">
      {successMessage && (
        <h3 className="success-alert">Registered Successfullly</h3>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Registeration Form</h1>
        <section>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          {userNameError && <p className="username-error">{userNameError}</p>}
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="email-error">{emailError}</p>}
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="password-error">{passwordError}</p>}
          <label>Contact Number</label>
          <input
            type="number"
            name="contactNo"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {contactError && <p className="contactNo-error">{contactError}</p>}
          <button>Submit</button>
        </section>
      </form>
    </div>
  )
}

export default App
