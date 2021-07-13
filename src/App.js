import "./App.css";

function App(props) {
  return (
    <>
      <div className="App">
        <h1>
          Hello world i am {props.name} and my age is {props.age}
        </h1>
      </div>
      <div className={"FancyBorder-" + props.color}>{props.children}</div>
    </>
  );
}
export default App;
