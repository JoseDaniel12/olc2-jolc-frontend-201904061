import CodeArea from "./CodeArea";
import classes from "./Console.module.css";

function Console() {

  function compile() {
    fetch('http://localhost:3000/').then(res => {
      if (res != null) {
        alert("hola")
      }
    })
  }

  return (
    <div>
      <button onClick={compile}>Compilar</button>
      <div className={classes.consoleContainer}>
        <CodeArea />
      </div>
    </div>
  );
}

export default Console;
