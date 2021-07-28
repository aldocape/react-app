import ListaDeLinks from "./ListaDeLinks";

function DetalleDeHeroe(props) {
  const element = (
    <>
      <h1 style={{ color: props.colorLetras }} className="title">
        Ficha del héroe
      </h1>

      <img
        className="heroThumb"
        src={props.heroe.thumbnail.path + ".jpg"}
        alt={props.heroe.thumbnail.path}
      />
      <h2 style={{ color: props.colorLetras }}>{props.heroe.name}</h2>

      <ListaDeLinks
        tipo="Comics"
        colorFondos={props.colorFondos}
        lista={props.heroe.comics}
      />
      <ListaDeLinks
        tipo="Series"
        colorFondos={props.colorFondos}
        lista={props.heroe.series}
      />
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
    </>
  );
  return element;
}

export default DetalleDeHeroe;
