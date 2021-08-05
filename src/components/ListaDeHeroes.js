import DetalleHeroeLista from "./DetalleHeroeLista";

function ListaDeHeroes(props) {
  const element = props.lista.length > 0 && (
    <>
      <h1>Listado de héroes</h1>
      <ul>
        {props.lista.map((elemento, i) => {
          let backCol = "";
          if (i === props.selectedHero) {
            if (props.theme === "Dark") {
              backCol = "#251F44";
            } else {
              backCol = "#8AB6D6";
            }
          }
          return (
            <li
              style={{ backgroundColor: backCol }}
              onClick={() => {
                props.setSelectedHero(i);
              }}
              key={elemento.name}
            >
              <DetalleHeroeLista heroe={elemento} />
            </li>
          );
        })}
      </ul>
    </>
  );
  return element;
}

export default ListaDeHeroes;
