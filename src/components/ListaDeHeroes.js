import DetalleHeroeLista from "./DetalleHeroeLista";

function ListaDeHeroes(props) {
  const colorLetras =
    props.selectedTheme === "light" ? "rgb(66, 165, 245)" : "rgb(31, 63, 105)";
  const colorFondos =
    props.selectedTheme === "light" ? "rgb(242, 250, 255)" : "rgb(44, 96, 152)";
  const element = props.lista.length > 0 && (
    <>
      <h1 style={{ color: colorLetras }}>Listado de héroes</h1>
      <ul>
        {props.lista.map((elemento, i) => {
          let backCol = colorFondos;
          if (i === props.selectedHero) {
            backCol = "lightblue";
          }
          return (
            <li
              style={{ backgroundColor: backCol }}
              onClick={() => {
                props.setSelectedHero(i);
              }}
              key={elemento.name}
            >
              <DetalleHeroeLista colorLetras={colorLetras} heroe={elemento} />
            </li>
          );
        })}
      </ul>
    </>
  );
  return element;
}

export default ListaDeHeroes;
