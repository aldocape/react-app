import ListaDeLinks from "./ListaDeLinks";

function DetalleDeHeroe(props) {
  const element = (
    <div className="ficha">
      <h1 className="title">Ficha del héroe</h1>

      <img
        className="heroThumb"
        src={props.heroe.thumbnail.path + ".jpg"}
        alt={props.heroe.thumbnail.path}
      />
      <h2>{props.heroe.name}</h2>

      <ListaDeLinks tipo="Comics" lista={props.heroe.comics} />
      <ListaDeLinks tipo="Series" lista={props.heroe.series} />
      <ListaDeLinks
        tipo="Stories"
        colorFondos={props.colorFondos}
        lista={props.heroe.stories}
      />
      <ListaDeLinks
        tipo="Events"
        colorFondos={props.colorFondos}
        lista={props.heroe.events}
      />
      <br />
    </div>
  );
  return element;
}

export default DetalleDeHeroe;
