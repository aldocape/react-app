export default function NoResults({ isLoading }) {
  return (
    !isLoading && <div className="noResults">&nbsp;&nbsp;No hay resultados</div>
  );
}
