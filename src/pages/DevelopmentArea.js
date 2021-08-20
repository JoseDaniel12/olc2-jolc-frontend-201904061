import CodeEditor from "../components/CodeEditor";
import Console from "../components/Console";
import classes from "./DevelopmentArea.module.css";

function DevelopmentArea() {
  return (
    <div className={classes.developementAreaContainer}>
      <CodeEditor />
      <Console />
    </div>
  );
}

export default DevelopmentArea;
