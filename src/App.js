import BlackButtomComponent from "./components/BlackButtomComponent";
import TextFieldComponent from "./components/TextFieldComponent";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  let name = 'anurag'
  return (
    <div className="App">
      {/* how to use variable */}
      {name}
      <h1>Learning React</h1>
      <hr/>
      <TextFieldComponent/>
      <hr/>
      <BlackButtomComponent />
      <hr/>
      <UseStateComponent/>
    </div>
  );
}

export default App;
