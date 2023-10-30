import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import "./style.css";

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(" ");

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== "") {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    // update char count (including whitespaces)
  }, [text]);

  return (
    <div className="App">
      <h2>Responsive Paraghraph World Counter</h2>
      <div>
        {" "}
        <textarea value={text} onChange={changeHandler}></textarea>
        <div>
          <p className="word-count">Word Count: {wordCount}</p>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
