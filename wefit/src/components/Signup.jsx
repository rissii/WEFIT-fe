import { useState } from 'react'


const Signup = ({ setShowModal,  isSignUp }) => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    //const [ cookies, setCookie, removeCookie] = useCookies(null)

    

    console.log(name, email, password, confirmPassword)


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
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>

            <h2>{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            <form onSubmit={handleSubmit}>
            <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Username"
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>
            </form>

            <hr/>
            <h2>GET THE APP</h2>

        </div>
    )
}
export default Signup
