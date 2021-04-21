import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header"></header>
      </div>
      <main>
        <Dictionary defaultKeyword="forest" />
      </main>
      <footer className="App-footer">
        <small>
          <a
            href="https://github.com/krushtonski/React-dictionary-project"
            target="_blank"
            rel="noreferrer"
            alt="link to github repository"
          >
            Open Source Code
          </a>
          by
          <a
            href="https://www.linkedin.com/in/krusht/"
            target="_blank"
            rel="noreferrer"
            alt="link to LinkedIn profile for Kate Rushton"
          >
            Kate Rushton
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
