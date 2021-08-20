import CodeArea from "./CodeArea";
import classes from "./CodeEditor.module.css";

function CodeEditor() {
  return (
    <div>
      <div className={classes.header}>
        <p>Editor</p>
        <button>+</button>
      </div>
      <div className={classes.codeEditorContainer}>
        <CodeArea />
      </div>
    </div>
  );
}

export default CodeEditor;
