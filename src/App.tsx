import AppBar from './components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}
