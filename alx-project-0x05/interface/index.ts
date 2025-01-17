// interface/index.ts

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

export interface PageRouteProps {
  pageRoute: string;
}
