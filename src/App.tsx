/* eslint-disable */
import { Header } from './sections/header/Header';
import './App.scss';
import { GridContainer } from './sections/gridContainer/GridContainer';
import { Subcription } from './sections/subcription/Subcription';
import { Footer } from './sections/footer/Footer';

function App() {
  return (
    <main className="App">
      <Header />
      <GridContainer />
      <Subcription />
      <Footer />
    </main>
  );
}
export default App;
