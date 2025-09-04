import { BrowserRouter } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from 'react';
import { 
  Navbar,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas 
} from './components';
import Media from './components/canvas/Media';
import { checkAndUpdateVersion } from './utils/versionManager';

// Lazy load heavy components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Tech = lazy(() => import('./components/Tech'));
const Experience = lazy(() => import('./components/Experience'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  // Check version and clear data if needed on app launch
  useEffect(() => {
    const checkVersion = async () => {
      const wasDataCleared = await checkAndUpdateVersion();
      
      if (wasDataCleared) {
        console.log('🔄 Site data cleared due to version change. Page will reload shortly...');
      }
    };
    
    checkVersion();
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Suspense fallback={
            <div className="h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
            </div>
          }>
            <Hero/>
          </Suspense>
        </div>
        
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        }>
          <About/>
        </Suspense>
        
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        }>
          <Experience/>
        </Suspense>
        
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        }>
          <Tech/>
        </Suspense>
        
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        }>
          <Works/>
        </Suspense>
        
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Suspense fallback={
            <div className="h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
            </div>
          }>
            <Contact/>
          </Suspense>
          <StarsCanvas/>
        </div>
        <Media />
      </div>
    </BrowserRouter>
  )
}

export default App
