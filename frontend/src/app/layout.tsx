import { AuthProvider } from '@/contexts/authContext';
import '../styles/global.scss';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, PropsWithChildren } from "react";
import FlowbiteContext from "../contexts/FlowbiteContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dental Reports - Healthy Smiles',
  description: 'Administrate dental reports for Healthy Smiles',
}

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <FlowbiteContext>{children}</FlowbiteContext>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
