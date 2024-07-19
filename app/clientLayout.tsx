import React from 'react';

import Providers from './redux/provider'; // Import your Redux Provider setup
import { Inter } from 'next/font/google'; // Import any font setup or other global configurations
import { Footer, Header } from 'antd/es/layout/layout';

const inter = Inter({ subsets: ['latin'] });

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={inter.className}>
      <Header />
      <Providers>
        {children}
      </Providers>
      <Footer />
    </div>
  );
};

export default ClientLayout;