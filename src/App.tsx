import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  let count: number = 0;
  let isValid: boolean = true;

  return (
    <>
      <section id="center">
        <div>
          {isValid && <HelloWorld name="Ynov.user" />}

          {count > 3 ? <div>Important things</div> : <div>Sile things</div>}

          {["pomme", "banane", "poire"].map((el) => (
            <HelloWorld key={el} name={el} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
