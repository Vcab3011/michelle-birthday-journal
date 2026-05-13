import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Scrapbook from './pages/Scrapbook';
import MemoryDetail from './pages/MemoryDetail';
import Letters from './pages/Letters';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } 
        />
        <Route 
          path="/scrapbook" 
          element={
            <PageWrapper>
              <Scrapbook />
            </PageWrapper>
          } 
        />
        <Route 
          path="/memory/:id" 
          element={
            <PageWrapper>
              <MemoryDetail />
            </PageWrapper>
          } 
        />
        <Route 
          path="/letters" 
          element={
            <PageWrapper>
              <Letters />
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}
