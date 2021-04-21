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
      <footer className="footer">
        <small>
          <a
            href="https://github.com/krushtonski/React-dictionary-project"
            target="_blank"
            rel="noreferrer"
            alt="link to github repository"
          >
            Open Source Code{" "}
          </a>
          by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/krusht/"
            alt="link to LinkedIn profile for Kate Rushton"
          >
            Kate Rushton
          </a>
        </small>
        <br />
        <small>
          <a
            href="https://blush.design/collections/open-doodles/doodles-reading/G3WUfj8isJ"
            target="_blank"
            rel="noreferrer"
            alt="link to Illustration of Woman Reading"
          >
            Illustration{" "}
          </a>
          by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://blush.design/"
            alt="link to Blush Design Website"
          >
            Pablo Stanley at Blush.design
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
