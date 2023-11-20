'use client'
import {useState} from "react"

const Construction = () => {
  const [isDark, setIsDark] = useState(false)

  const themeToggle = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
    console.log("hola")
  }
  return (
    <>
    {/* <h1>{count}</h1> */}
      <h1 className=" text-5xl text-red-500 dark:text-blue-500">Merme Tasker hola</h1>
      <img src="/Mermelada.png" alt="" className="m-10 w-3/12" />
      <h2 className="text-3xl">En construcción</h2>
      <button onClick={themeToggle}>cambio de tema</button>
    </>
  );
};

export default Construction;
