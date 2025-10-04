import SignIn from "@/components/clerk/SignIn";

export default function SignUpScreen() {
    return (
        <SignIn 
        signUpUrl="/"
           scheme="zenly"
        />
    )
}