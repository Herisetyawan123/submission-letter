import { SyntheticEvent, useRef } from "react"
import { Input } from "../../../src/components/input";

export default function SignIn() {
  const formRef = useRef(null);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      nim: { value: string };
      password: { value: string };
    }
    target.nim.value = ""
  }

  return (
    <main className="w-full h-[100vh] flex justify-center items-center">
      <div className="bg-white border p-5 rounded-md w-[380px] flex flex-col  ">
        <h2 className="text-center font-semibold text-xl">Selamat Datang</h2>
        <form ref={formRef} className="flex flex-col gap-y-5 justify-center mt-5" onSubmit={onSubmit} method="post">
          <div className="flex flex-col mb-3">
            <label className="mb-2 font-medium" htmlFor="input-nim">Nim</label>
            <Input name="nim" type="text" placeholder="20241010xxxx" />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-2 font-medium" htmlFor="input-password">Password</label>
            <Input name="password" type="password" placeholder="password" />
          </div>
          <button className="bg-green-500 text-white font-semibold hover:bg-green-600 p-2 rounded-md">Sign In</button>
        </form>
      </div>
    </main>
  )
}