import AppBar from './components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
