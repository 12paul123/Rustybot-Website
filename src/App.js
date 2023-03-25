import Navbar from './components/Navbar';
import Info from './components/Info';
import Panel from './components/Panel';
import FAQ from './components/FAQ';
import Invite from './components/Invite';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar page="home"></Navbar>
      <Info></Info>
      <Panel></Panel>
      <Invite></Invite>
      <FAQ></FAQ>
      <Footer page="home"></Footer>
    </div>
  );
}

export default App;
