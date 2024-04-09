import Quote from "../components/Quote"
import SignupForm from "../components/SignupForm"

export const Signin = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <div className="col-span-1 h-screen">
          <SignupForm type="signin"/>  
        </div>
        <div className="lg:flex hidden col-span-1 "><Quote/></div>
    </div>
  )
}
