"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
type T = "light"|"dark";
const Ctx = createContext<{theme:T;toggle:()=>void}>({theme:"light",toggle:()=>{}});
export function ThemeProvider({children}:{children:ReactNode}) {
  const [theme,setTheme] = useState<T>("light");
  useEffect(()=>{
    const s=localStorage.getItem("agt-theme") as T|null;
    const sys=window.matchMedia("(prefers-color-scheme:dark)").matches;
    const t=s||(sys?"dark":"light");
    setTheme(t);document.documentElement.classList.toggle("dark",t==="dark");
  },[]);
  const toggle=()=>{const t=theme==="light"?"dark":"light";setTheme(t);document.documentElement.classList.toggle("dark",t==="dark");localStorage.setItem("agt-theme",t);};
  return <Ctx.Provider value={{theme,toggle}}>{children}</Ctx.Provider>;
}
export const useTheme=()=>useContext(Ctx);
