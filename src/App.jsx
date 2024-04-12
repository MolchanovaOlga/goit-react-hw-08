import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Registration = lazy(() => import('./pages/Registration/Registration'));
const Login = lazy(() => import('./pages/Login/Login'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Layout>
  );
}

export default App;
