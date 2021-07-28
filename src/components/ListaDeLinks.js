function ListaDeLinks(props) {
  return props.lista.items.length ? (
    <>
      <h3 style={{ backgroundColor: props.colorFondos }}>
        {props.tipo} ({props.lista.available})
      </h3>
      <ul>
        {props.lista.items.map((elemento) => {
          return (
            <li key={elemento.name}>
              <a href={elemento.resourceURI}>{elemento.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <div className="noResults">No hay elementos para mostrar aquí</div>
  );
}

export default ListaDeLinks;
