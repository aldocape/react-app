function ListaDeLinks(props) {
  console.log(props);
  const element = props.lista.items.length > 0 && (
    <>
      <h2>
        {props.tipo} ({props.lista.available})
      </h2>
      <ul>
        {props.lista.items.map((elemento) => {
          return (
            <li key={elemento.name}>
              <a target="_blank" rel="noreferrer" href={elemento.resourceURI}>
                {elemento.name}
              </a>
            </li>
          );
        })}
      </ul>

      <br />
    </>
  );
  return element;
}

export default ListaDeLinks;
