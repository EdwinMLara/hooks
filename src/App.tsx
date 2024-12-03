import './App.css';
import CounterUseState from './components/usestate/CounterUseState';
import ToDoListUseState from './components/usestate/ToDoListUseState';
import FormUseState from './components/usestate/FormUseState';
import UserArrayUseState from './components/usestate/UserArrayUseState';
import ThemeUseContext from './components/usecontext/ThemeUseContext';
import InputUseRef from './components/useRef/InputUseRef';
import PostUseEffect from './components/useeffect/PostUseEffect';
import CounterActionUseReducer from './components/usereducer/CounterActionUseReducer';
import ResizeUseLayoutEffect from './components/useLayoutEffect/ResizeUseLayoutEffect';
import TodoListUseMemo from './components/useMemo/TodoListUseMemo';

function App() {
  return (
    <div className="App">
      <h1 style={{color:"red"}}>UseState Examples</h1>
      <CounterUseState/>
      <p> ============================================================================ </p><br/>
      <ToDoListUseState/>
      <p> ============================================================================ </p><br/>
      <FormUseState/>
      <p> ============================================================================ </p><br/>
      <UserArrayUseState/>
      <h1 style={{color:"red"}}>UseContext Example</h1>
      <ThemeUseContext/>
      <h1 style={{color:"red"}}>Hook useref</h1>
      <InputUseRef/>
      <h1 style={{color:"red"}}>Hook useEffect</h1>
      <PostUseEffect/>
      <h1 style={{color:"red"}}>Hook useReduccer</h1>
      <CounterActionUseReducer/>
      <h1 style={{color:"red"}}>Hook useLayoutEffect</h1>
      <ResizeUseLayoutEffect/>
      <h1 style={{color:"red"}}>Hook useLayoutEffect</h1>
      <TodoListUseMemo/>
    </div>
  );
}

export default App;
