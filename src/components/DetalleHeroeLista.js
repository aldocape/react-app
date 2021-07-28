function DetalleHeroeLista(props) {
  const element = (
    <div className="elementoListaHeroes">
      <div className="imgHeroeLista">
        <img
          className="heroImgLista"
          src={
            props.heroe.thumbnail.path + "." + props.heroe.thumbnail.extension
          }
          alt={props.heroe.thumbnail.path}
        />
      </div>
      <div className="datosHeroeLista">
        <h2>
          <a
            style={{ color: props.colorLetras }}
            href={props.heroe.resourceURI}
          >
            {props.heroe.name}
          </a>
        </h2>

        <p>Comics: {props.heroe.comics.available}</p>
        <p>Series: {props.heroe.series.available}</p>
        <p>Stories: {props.heroe.stories.available}</p>
        <p>Events: {props.heroe.events.available}</p>
      </div>
    </div>
  );
  return element;
}

export default DetalleHeroeLista;
