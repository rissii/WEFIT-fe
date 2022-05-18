import { useState } from 'react'


const Signup = ({ setShowModal,  isSignUp }) => {
    const [userName, setuserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    //const [ cookies, setCookie, removeCookie] = useCookies(null)

    

    console.log(userName, email, password, confirmPassword)


    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

      
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match!')
                return
            }
            

        //     const response = await axios.post(`http://localhost:8000/${isSignUp ? 'signup' : 'login'}`, { email, password })

        //     setCookie('AuthToken', response.data.token)
        //     setCookie('UserId', response.data.userId)

        //     const success = response.status === 201
        //     if (success && isSignUp) navigate ('/onboarding')
        //     if (success && !isSignUp) navigate ('/dashboard')

        //     window.location.reload()

        // } catch (error) {
        //     console.log(error)
        // }

    }

    return (
        <div  className=" auth-modal flex justify-center">
            
            <button
            className="d-flex justify-end  "
            aria-label="Close"
            onClick={handleClick}
            aria-hidden="true"
          >
            &times;
          </button>
            <h1 className='mt-3 mb-3'>{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h1>
            <p className='mt-3 mb-3'>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            <form  className='m-auto' onSubmit={handleSubmit}>
            
            {isSignUp && <input
            className='rounded '
                    type="userName"
                    id="userName"
                    name="userName"
                    placeholder="Username"
                    required={true}
                    onChange={(e) => setuserName(e.target.value)}
                />}
                <input
                className='rounded'
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                className='rounded'
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                className='rounded'
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <button style={{
            background: "linear-gradient(45deg, rgb(254, 48, 114), rgb(255, 89, 64))",
          }} className="text-white secondary-button mt-4 mb-4" type="submit"> Submit </button>
                <p>{error}</p>
            </form>

            <hr/>
            <h2 className='mt-4 mb-5'>GET THE APP</h2>

        </div>
    )
}
export default Signup
