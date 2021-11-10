import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="container">
            <Editor />
        </div>
    </div>
  );
}

export default App;
