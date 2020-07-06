import React from "react";
import Modal from "react-modal";
import './loginModal.css'

import "@rmwc/button/styles"
import { Button } from '@rmwc/button'

const customStyles = {
  content: {
    position: 'absolute',
    top: '300px',
    left: '300px',
    right: '300px',
    bottom: '300px',
    boxShadow: '0px 8px 36px #222',
    borderRadius: '6px'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const Login = (({ loginState, loginModalOpen, closeLoginModal, openSignupModal }) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      case 'age':
        errors.age =
          value.length < 2
            ? 'Please write your age in a correct form!'
            : '';
        break;
      default:
        break;
    }
    if (name === 'email') {
      setEmail(value)
    }
    else if (name === 'password') {
      setPassword(value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }
  }

  return (
    <div>
      <Modal
        isOpen={loginModalOpen}
        onRequestClose={closeLoginModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div className='wrapper'>
          <div className='form-wrapper'>
            <h2 className='title'>LOGIN</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className='email'>
                <label htmlFor="email">EMAIL</label>
                <input placeholder={"너의 아이덴티티...널 알려줘..."} type='email' name='email' onChange={handleChange} noValidate />
                {errors.email.length > 0 &&
                  <span className='error'>{errors.email}</span>}
              </div>
              <div className='password'>
                <label htmlFor="password" >PASSWORD</label>
                <input placeholder={"써보시지 너의 비밀... 자신있다면..."} type='password' name='password' onChange={handleChange} noValidate />
                {errors.password.length > 0 &&
                  <span className='error'>{errors.password}</span>}
              </div>

              <div>
                <span className='submit'>
                  <Button onClick={openSignupModal}>Create</Button>
                </span>
                <span className='loginnn'>
                  <Button>LOG IN</Button>
                </span>
              </div>
              <div className="provider">provide by Kim SoHyun, 자신있다면 연락해... 010-...</div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default Login;
