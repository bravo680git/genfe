import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
