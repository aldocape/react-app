export default function NoResults({ isLoading, code }) {
  return (
    !isLoading && (
      <>
        <div className="noResults">
          &nbsp;&nbsp;No hay resultados{" "}
          {code ? (
            <>
              <br />
              <br />
              &nbsp;&nbsp;Código:&nbsp;{code}
            </>
          ) : (
            ""
          )}
        </div>
      </>
    )
  );
}
