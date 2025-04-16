import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SecondPage from '../pages/SecondPage';
import ErrorPage from '../pages/ErrorPage';
import ThirdPage from '../pages/ThirdPage';
import XYPage from '../pages/XYPage';
import UgadalkaPage from '../pages/UgadalkaPage'
import SwitchPage from '../pages/SwitchPage'
import Cafe from '../pages/Cafe';
import TestPage from '../pages/TestPage'


const Router = () => {
  return (
    <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/second" index element={<SecondPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/XYP" element={<XYPage />} />
        <Route path="/ugadat" element={<UgadalkaPage />} />
        <Route path="/switch" element={<SwitchPage />}/>
        <Route path="/cafe" element={< Cafe/>} />
        <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};

export default Router;
