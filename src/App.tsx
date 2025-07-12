import './App.css'
import { Footer } from './components/Footer';
import { AboutMe } from './pages/aboutme/AboutMe';
import { ContactPage } from './pages/contact/ContactPage';
import { HomePage } from './pages/home/HomePage';
import { Proyects } from './pages/proyects/Proyects';
import { WorkExperience } from './pages/workexperience/WorkExperience';
function App() {



  return (
    <>
      <HomePage/>
      <WorkExperience/>
      <Proyects/>
      <AboutMe/>
      <ContactPage/>
      <Footer/>
    </>
  )
}

export default App
