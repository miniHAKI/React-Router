import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/GitHub/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <App/>,
//     children : [{
//       path : '',
//       element : <Home/>
//     },
//     {
//       path : 'about',
//       element : <About/>
//     },
//     {
//       path : 'contact',
//       element : <Contact/>
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
    <Route
    loader={githubInfoLoader}
     path='github'
     element={<Github/>}></Route>
    <Route path='user/:id' element={<User/>}></Route>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
