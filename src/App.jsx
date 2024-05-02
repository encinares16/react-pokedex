import { useState } from "react";
import Links from "./assets/components/NavLink";
import { Outlet } from "react-router-dom";

import setData from './assets/scripts/setData'
import getLSD from './assets/scripts/getLocalStorageData'


export default function App() {
  
  const LSTheme = getLSD('react-pokedex-theme') == null ? "light" : getLSD('react-pokedex-theme').theme;
  const [theme, setTheme] = useState(getLSD('react-pokedex-theme') == null ? "light" : LSTheme);

  const changeTheme = () => {
    if(theme == "dark"){
      setData('react-pokedex-theme', {theme: "light"})
      setTheme(getLSD('react-pokedex-theme').theme);
      document.querySelector('.theme').classList.add(getLSD('react-pokedex-theme').theme)
      document.querySelector('.theme').classList.remove("dark");

    } else if(theme == "light") {
      setData('react-pokedex-theme', {theme: "dark"})
      document.querySelector('.theme').classList.add(getLSD('react-pokedex-theme').theme)
      setTheme(getLSD('react-pokedex-theme').theme);
      document.querySelector('.theme').classList.remove("light");
    }
  }

  document.querySelector('.theme').classList.add(LSTheme)
  return (
    <>
      <header>
        <input type="button" value={`${theme} mode`} onClick={changeTheme} />
        <h1>Pokédex</h1>
        <p>Github</p>
      </header>
      <div className="generation">
          <h1>GENERATION</h1>
          <p>under development :)</p>
          <Links/>
      </div>
      <Outlet/>
    </>
  )
}

