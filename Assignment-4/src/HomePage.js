import logo from './logo.svg';
import './App.css';
import Headers from './components/Header.js';
import MainSection from './components/MainSection.js';
import Footer from './components/Footer.js';

function HomePage() {
  return (
    <div>
      <Headers></Headers>
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
