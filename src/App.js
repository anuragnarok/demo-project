import BlackButtomComponent from "./components/BlackButtomComponent";
import TextFieldComponent from "./components/TextFieldComponent";
import UseStateComponent from "./components/UseStateComponent";
import {PropsPassingWithProps,PropsPassingWithDestructuring} from "./components/PropsPassing";
import PracticeHooksComponent from "./components/PracticeHooksComponent";
import CarComponent from "./components/CarComponent";

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
      <hr/>
      <PropsPassingWithProps numberProps={7} addAmount={10}/>

      <br/>
      <PropsPassingWithDestructuring numberProps={5} multiplyAmount={6}/>
      <hr/>
      <PracticeHooksComponent/>
      <hr/>
      <CarComponent/>

      
    </div>
  );
}

export default App;
