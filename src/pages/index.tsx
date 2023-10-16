import React, { useState } from "react";
import { useRouter } from "next/router";

function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    if (!email) {
      setEmailError("Please enter your email.");
      return;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please enter your password.");
      return;
    } else {
      setPasswordError("");
    }
    router.push("/chat");
  };

  return (
    <section className=" bg-gradient-to-br from-zinc-900 to-zinc-800 w-screen h-screen flex justify-center items-center">
      <section className="w-5/6 md:w-1/2 lg:w-5/12 bg-zinc-950 rounded-3xl flex">
        <section
          id="form"
          className="basis-full lg:basis-5/12 flex flex-col text-white px-10 pb-10"
        >
          <h1 className="text-3xl font-bold my-12">
            Login Account
            <span className="inline-block bg-gradient-to-tr from-[#043d7a] via-[#28b7e7] to-[#0d1e55] w-3 h-3 bg-red-300 rounded-full ml-2"></span>
          </h1>
          <form action="" className="flex flex-col gap-8 text-gray-400">
            <label className="group h-16">
              email
              <div className="transition-opacity ease-in  opacity-0 group-focus-within:opacity-100 h-10 w-full bg-gradient-to-tr from-[#043d7a] via-[#28b7e7] to-[#0d1e55] rounded-lg blur-md"></div>
              <div className=" relative -top-10 bg-none focus-within:bg-gradient-to-tr from-[#043d7a] via-[#28b7e7] to-[#0d1e55] p-[1px] rounded-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 bg-zinc-800 rounded-lg p-2 outline-none appearance-none-none w-full"
                />
                <div className="text-red-500 text-sm">{emailError}</div>
              </div>
            </label>

            <label className="group h-16">
              password
              <div className="transition-opacity ease-in  opacity-0 group-focus-within:opacity-100 h-10 w-full bg-gradient-to-tr from-[#043d7a] via-[#28b7e7] to-[#0d1e55] rounded-lg blur-md"></div>
              <div className=" relative -top-10 bg-none focus-within:bg-gradient-to-tr from-[#043d7a] via-[#28b7e7] to-[#0d1e55] p-[1px] rounded-lg">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-10 bg-zinc-800 rounded-lg p-2 outline-none appearance-none-none w-full"
                />
                <div className="text-red-500 text-sm">{passwordError}</div>
              </div>
            </label>
            <a href="#" className="text-right text-sm underline">
              Forgot your password?
            </a>
            <button
              type="button"
              onClick={handleLogin}
              className="bg-gradient-to-tr from-[#043d7a] via-[#28b7e7] to-[#0d1e55] text-white font-bold h-10 rounded-lg"
            >
              Login
            </button>
            <a href="#" className="text-center text-sm underline">
              Create Account
            </a>
          </form>
        </section>
        <section
          id="picture"
          className="w-0 lg:w-7/12  bg-[url('/assets/bg-login.jpg')] bg-cover rounded-r-3xl shadow-[inset_300px_30px_400px_-100px_theme('colors.zinc.950')] opacity-[140]"
        ></section>
      </section>
    </section>
  );
}

export default Page;
