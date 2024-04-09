
interface ButtonType {
    buttonText: string
}


export default function Button({buttonText}:ButtonType) {
  return (
    <div className="flex">
        <button className="py-2 px-10 w-full bg-black text-white rounded-md">{buttonText}</button>
    </div>
  )
}
