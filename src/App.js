import Header from './components/header/Header';
import './App.scss';
import Headline from './components/headline/Headline';

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Headline header="Posts" desc="Click the button to render posts!" />
      </main>
    </div>
  );
}

export default App;
