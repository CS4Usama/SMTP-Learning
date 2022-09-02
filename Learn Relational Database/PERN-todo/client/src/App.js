import './App.css';
// Components
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <InputTodo />
                <ListTodos />
            </header>
        </div>
    );
}

export default App;
