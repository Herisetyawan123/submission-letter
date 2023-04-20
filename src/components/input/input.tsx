import { InputPropsType } from "./types";

export default function Input({ name, type = 'text', id, placeholder }: InputPropsType){
  return (
    <input id={id} className="p-2 border rounded focus:outline outline-sky-300" type={type} name={name} placeholder={placeholder} />
  )
}