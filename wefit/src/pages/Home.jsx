import Nav from '../components/Nav'
import {useState} from 'react'
import Signup from '../components/Signup'

const Home = () => {
    const [showModal, setShowModal] = useState(true)
    const [isSignUp, setIsSignUp] = useState(true)

    const handleClick = () => {
        // if (authToken) {
        //     removeCookie('UserId', cookies.UserId)
        //     removeCookie('AuthToken', cookies.AuthToken)
        //     window.location.reload()
        //     return
        // }
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav
                //authToken={authToken}
                // minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <h1 className="primary-title">Don’t dream of it. Train for it.</h1>
                <button className="primary-button" onClick={handleClick}>
                 Signup
                </button>


                {showModal && (
                    <Signup setShowModal={setShowModal} isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    )
}
export default Home