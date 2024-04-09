import { Link } from "react-router-dom";
import InputElement from "./InputElement";
import Button from "./Button";

interface FormType {
    type : string
}

export default function SignupForm({type}: FormType) {
    return (
      <div className="flex flex-col h-screen justify-center w-full">
        <div className="flex justify-center ">
          <div className="max-w-md">
            <div className="flex flex-col justify-center">
                <div className="font-bold text-4xl text-center">{type=="signup"?"Create an account":"Login to your account"}</div>
                <div className="font-normal text-sm text-center text-slate-400 mt-1 mb-3" >{type=="signup"? <div>Already have an account? <Link to="/signin" className="underline">Login</Link></div>: <div>Don't have an account? <Link to="/signup" className="underline">Create an account</Link></div>} </div>
                {type=="signup" && <InputElement type="text" placeholder="Enter your username" label="Username" />}
                <InputElement type="text" placeholder="abc@example.com" label="Email"/>
                <InputElement type="password" placeholder="123456" label= "Password" /> 
                <div className="mt-4">
                    <Button buttonText={type=="signup"?"Signup":"Login"} />   
                </div>          
            </div>
          </div>
        </div>
      </div>
    );
  }
  