import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BagItem from './components/BagItem.jsx';
import Home from './routes/Home.jsx';
import { Provider } from 'react-redux';
import myntraStore from './store/Index.js';
import "bootstrap/dist/css/bootstrap.min.css"
import MenSection from './components/MenSection.jsx';
import WomenSection from './components/WomenSection.jsx';
import ElectronicSection from './components/ElectronicSection.jsx';
import HomeLivingSection from './components/HomeLivingSection.jsx';
import KidSection from './components/KidSection.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/bag', element: <BagItem /> },
    { path: '/men', element: <MenSection /> },
    { path: '/women', element: <WomenSection /> },
    { path: '/electronics', element: <ElectronicSection /> },
    { path: '/home&Living', element: <HomeLivingSection /> },
    { path: '/kids', element: <KidSection /> },

  ],
},
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
