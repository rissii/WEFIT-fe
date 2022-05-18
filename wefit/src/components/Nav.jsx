import logo from "./logo.jpg";
import {FaDumbbell} from 'react-icons/fa'

const Nav = ({ authToken, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div >
      
     <h1 style={{
            fontSize: "40px",
          }} className=' text-white mt-3 ml-3'>WEFIT</h1>
      </div>
      {!authToken &&  (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in 
        </button>
      )}
    </nav>
  );
};
export default Nav;
