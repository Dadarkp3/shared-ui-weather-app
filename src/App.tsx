import "./App.css";
import Button from "./components/atom/Button";

function App() {
  return (
    <>
      <Button onClick={() => alert("Button Clicked!")}>Click Me</Button>
    </>
  );
}

export default App;
