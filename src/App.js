// import "./App.css";

// function App(props) {
//   return (
//     <>
//       <div className="App">
//         <h1>
//           Hello world i am {props.name} and my age is {props.age}
//         </h1>
//       </div>
//       <div className={"FancyBorder-" + props.color}>{props.children}</div>
//     </>
//   );
// }
// export default App;

// import React, { useState } from "react";
// export default function App() {
//   console.log("x");
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>Clickeaste {count} veces</p>
//       <button onClick={() => setCount(count + 1)}>Clickeame</button>
//     </div>
//   );
// }

// import md5 from "js-md5";

import styles from "./App.module.css";
import classnames from "classnames";
import themes from "./themes/Themes.module.css";

import React, { useState, useEffect } from "react";
import DetalleDeHeroe from "./components/DetalleDeHeroe";
import ListaDeHeroes from "./components/ListaDeHeroes";
import NoResults from "./components/NoResults";

import { getHeroes } from "./services/getHeroes";

export default function App(props) {
  // Selected Hero
  const [selectedHero, setSelectedHero] = useState(0);

  // Selected theme
  // const [selectedTheme, setSelectedTheme] = useState("light");

  // Set Logged in
  const [loggedIn, setLoggedin] = useState(false);

  // Load Heroes
  // const [loadMoreHeroes, setLoadMoreHeroes] = useState(false);

  // isLoading
  const [heroes, setHeroes] = useState([]);

  // state for Search
  const [currentSearch, setcurrentSearch] = useState("");

  const [isLoading, setisLoading] = useState(false);
  const [first, setFirst] = useState(0);
  const [code, setCode] = useState("");

  // const colorLetras =
  //   selectedTheme === "light" ? "rgb(66, 165, 245)" : "rgb(31, 63, 105)";
  // const colorFondos =
  //   selectedTheme === "light" ? "rgb(199, 233, 241)" : "rgb(44, 96, 152)";

  const { DarkA, DarkB } = themes;
  const [theme, setTheme] = useState(themes.DarkA);

  // charactersInfo.data.results = [];

  useEffect(() => {
    if (isLoading) {
      async function loadHeroes() {
        const res = await getHeroes(first, 20, currentSearch);

        setisLoading(false);
        let newHeroList = [...heroes];
        if (res) {
          if (res.code === 200) newHeroList = [...heroes, ...res.data.results];
        }
        setHeroes(newHeroList);
        setCode(res.code);
        setFirst(first + 20);
      }
      loadHeroes();
    }
  }, [isLoading, first, heroes, currentSearch]);

  // useEffect(() => {
  //   if (loadMoreHeroes) getHeros();
  // });

  // async function getHeros() {
  //   const ts = Number(new Date());
  //   const hash = md5.create();
  //   hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);

  //   const response = await fetch(
  //     `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=20&offset=300&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
  //   );

  //   const res = await response.json();
  //   console.log(res.code);
  //   setCharactersInfo(res);

  //   return res;
  // }

  const element = (
    <div className={classnames(styles.Container, theme)}>
      <div className={classnames(styles.DivTitle, theme)}>
        <div className="leftTitle">
          <h1>Caracteres de Marvel</h1>
          <input
            type="text"
            value={currentSearch}
            onChange={(e) => setcurrentSearch(e.target.value)}
          />
          <button
            onClick={() => {
              setHeroes([]);
              setSelectedHero(0);
              setFirst(0);
              setisLoading(true);
            }}
          >
            Search
          </button>
          <button
            onClick={() => {
              if (theme === DarkA) {
                setTheme(DarkB);
              } else {
                setTheme(DarkA);
              }
            }}
          >
            {theme === DarkA ? "Toggle Light Theme" : "Toggle Dark Theme"}
          </button>
        </div>
        <div className="rightTitle">
          {loggedIn ? (
            <>
              <h1>Bienvenido Aldo!!</h1>
              <button
                onClick={() => {
                  setLoggedin(false);
                }}
              >
                Log out
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setLoggedin(true);
              }}
            >
              Log in
            </button>
          )}
        </div>
      </div>
      <div className="main">
        <div className="listado">
          <div className="listaHeroes">
            {
              heroes.length ? (
                <ListaDeHeroes
                  theme={theme === DarkA ? "Dark" : "Light"}
                  lista={heroes}
                  selectedHero={selectedHero}
                  setSelectedHero={setSelectedHero}
                />
              ) : (
                <NoResults code={code} isLoading={isLoading} />
              )

              // <div className="noResults">
              //   &nbsp;&nbsp;Presione el botón "load Heroes" para generar el listado
              //   desde la API de Marvel
              // </div>
            }
          </div>

          <div className="capa-boton">
            {!isLoading && (
              <button
                style={{ marginLeft: "15px" }}
                onClick={() => {
                  setisLoading(!isLoading);
                }}
              >
                Load Heroes
              </button>
            )}
            {isLoading && <div className="spinner"></div>}
          </div>
        </div>
        <div className="App" id="heroDetails">
          {!isLoading &&
            (heroes.length ? (
              <DetalleDeHeroe heroe={heroes[selectedHero]} />
            ) : (
              <NoResults isLoading={isLoading} />
            ))}
          {isLoading && <div className="spinner"></div>}
        </div>
      </div>
    </div>
  );
  return element;
}
