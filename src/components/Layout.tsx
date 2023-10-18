'use client';
import { Lite_UserFragment } from '@/generated/graphql';
import { ThemeProvider } from '@material-tailwind/react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export enum AuthRestrict {
  NEVER = 0,
  LOGGED_OUT = 1 << 0,
  LOGGED_IN = 1 << 1,
  NOT_ADMIN = 1 << 2,
}

interface LayoutProps {
  children: React.ReactNode | Function;
  forbidWhen?: AuthRestrict;
}

export interface LayoutChildProps {
  currentUser?: Lite_UserFragment | null;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  forbidWhen = AuthRestrict.NEVER,
}) => {
  const forbidsLoggedIn = forbidWhen & AuthRestrict.LOGGED_IN;
  const forbidsLoggedOut = forbidWhen & AuthRestrict.LOGGED_OUT;
  const forbidsNotAdmin = forbidWhen & AuthRestrict.NOT_ADMIN;

  const renderChildren = (props?: LayoutChildProps) => {
    const inner = typeof children === 'function' ? children(props) : children;

    if (forbidsLoggedIn || forbidsNotAdmin) {
      return (
        // ! redirect to appropriate page (home or dashboard)
        null
      );
    }

    if (forbidsLoggedOut) {
      return (
        // ! Redirect to auth page
        null
      );
    }

    return inner;
  };

  return (
    <>
      <ThemeProvider>
        <Navigation />
        {renderChildren()}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
