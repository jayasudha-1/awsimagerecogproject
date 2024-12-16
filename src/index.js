import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./pages/index";
import UploadImage from './pages/UploadImagetoS3/UploadImage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomWebcam from "./pages/UploadImagefromWebCam/CustomWebcam"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="upload" element={<UploadImage />} />
          <Route index element={<UploadImage />} />
          <Route path="webcamera" element={<CustomWebcam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
