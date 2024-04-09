type InputType = {
    label:string,
    type: string,
    placeholder: string
}

export default function InputElement({label, type, placeholder}: InputType) {
    
    return (
    <div className="flex flex-col mt-3  ">
        <div className="font-semibold mb-1">{label}</div>
        <input type={type} placeholder={placeholder} className="border border-slate-400 rounded-md py-1 px-2"/>
    </div>
  )
}
