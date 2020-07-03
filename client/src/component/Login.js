import React, { memo } from 'react';
import Modal from 'react-modal';
//const axios = require('axios');

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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const Login = memo(({ loginState }) => {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#h00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Log In!</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Welcome back!</h2>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        loginState();
                        // axios.post('http://localhost:4000/login', { withCredentials: true })
                        //     .then((res) => {
                        //         if (res.status === 200) {
                        //             console.log(res)
                        //         }
                        //     })
                        //     .catch((err) => {
                        //         console.log(err);
                        //     })
                    }}
                >
                    <button onClick={closeModal}>close</button>
                    <div>E-mail:</div>
                    <input type="email" />
                    <div>Password:</div>
                    <input type="password" />
                    <button onClick={loginState}>Get in!</button>
                </form>
            </Modal>
        </div>
    );
})

export default Login;