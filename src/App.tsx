import AppBar from './components/AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Professional from './pages/Professional/Professional';
import Programming from './pages/Programming/Programming';

export default function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/professional' element={<Professional />} />
        <Route path='/programming' element={<Programming />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
