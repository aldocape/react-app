import ListaDeLinks from "./ListaDeLinks";

function DetalleDeHeroe(props) {
  console.log(props);
  const element = (
    <div id="heroDetails">
      <h1 className="title" style={{ textDecoration: "underline" }}>
        Caracteres de Marvel
      </h1>

      <img
        className="heroThumb"
        src={props.heroe.thumbnail.path + ".jpg"}
        alt={props.heroe.thumbnail.path}
      />
      <h1>{props.heroe.name}</h1>

      <ListaDeLinks tipo="Comics" lista={props.heroe.comics} />
      <ListaDeLinks tipo="Series" lista={props.heroe.series} />
      <ListaDeLinks tipo="Stories" lista={props.heroe.stories} />
      <br />
    </div>
  );
  return element;
}

export default DetalleDeHeroe;
