import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({ setUser, user }) {
    return (
        <>
            <h2>Sign Up</h2>
            <SignUpForm setUser={setUser} user={user} />
            <h2>Log In</h2>
            <LoginForm setUser={setUser} user={user} />
        </>
    )
}