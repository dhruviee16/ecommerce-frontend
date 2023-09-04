'use client';

import { ThemeProvider } from '@material-tailwind/react';
import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Layout;
