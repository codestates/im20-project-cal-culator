
import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//import axios from 'axios';
// import { Link, Route, withRouter } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

function Signup() {

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [userEmail, setEmail] = React.useState();
  const [userPassword, setPassword] = React.useState();
  const [userName, setName] = React.useState();
  const [userGender, setGender] = React.useState();
  const [userHeight, setHeight] = React.useState();
  const [userWeight, setWeight] = React.useState();

  let stateValue = {};

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#h00'; // 씩불랙
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitValue = () => {
    stateValue = {
      'email': userEmail,
      'password': userPassword,
      'username': userName,
      'gender': userGender,
      'height': userHeight,
      'weight': userWeight
    }
    console.log(stateValue)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 ref={_subtitle => (subtitle = _subtitle)}>SIGN UP</h2>
        {/* <button onClick={closeModal}>close</button> */}
        {/*<div>I am a modal</div> */}
        <form
          onSubmit={e => {
            e.preventDefault();
            window.location.replace('/');
            // axios.post('http://localhost:4000/signin/', stateValue, {withCredentials: true})
            // .then(response => {
            //   if(response.status === 200){
            //     // isLogin => true, userInfo
            //   }
            // })
            // .catch(error => {
            //   console.log(error);
            // });
          }}>
          <div>EMAIL</div>
          <input type="email" placeholder="적어 이메일" onChange={e => setEmail(e.target.value)} />
          <div>PASSWORD</div>
          <input type="password" placeholder="적어 비밀번호" onChange={e => setPassword(e.target.value)} />
          <div>FULL NAME</div>
          <input placeholder="적어 니 이름" onChange={e => setName(e.target.value)} />
          <div>GENDER</div>
          <input type="checkbox" value={"male"} onChange={e => setGender(e.target.value)} /><span>MALE</span> <input type="checkbox" value={"female"} onChange={e => setGender(e.target.value)} /><span>FEMALE</span>
          <div>HEIGHT(cm)</div>
          <input placeholder="적어 니 높이" onChange={e => setHeight(e.target.value)} />
          <div>WEIGHT(kg)</div>
          <input placeholder="적어 너의 비밀" onChange={e => setWeight(e.target.value)} />
          <div>
            <button onClick={submitValue} type="submit">SIGN UP</button><button>LOGIN</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Signup;
