import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SecondPage from '../pages/SecondPage';
import ErrorPage from '../pages/ErrorPage';
import ThirdPage from '../pages/ThirdPage';
import XYPage from '../pages/XYPage';
import SwitchPage from '../pages/SwitchPage'
import Cafe from '../pages/Cafe';
import TestPage from '../pages/TestPage'
import MeanPage from '../pages/MeanPage';

const Router = () => {
  return (
    <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/second" index element={<SecondPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/XYP" element={<XYPage />} />
        <Route path="/switch" element={<SwitchPage />}/>
        <Route path="/cafe" element={< Cafe/>} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/mean" element={<MeanPage/>} />
    </Routes>
  );
};

export default Router;
