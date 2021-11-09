import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import Tools from './components/Tools';

function App() {
  return (
    <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <div className="tools-sidebar">
            <Tools />
          </div>
          <div className="editor">
            <Editor />
          </div>
        </div>
    </div>
  );
}

export default App;
