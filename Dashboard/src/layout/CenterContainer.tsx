import { ReactNode } from 'react';

interface CenterContainerProps {
  children: ReactNode;
}

export function CenterContainer({ children }: CenterContainerProps) {
  return <main className='flex justify-center items-center min-h-screen p-6'>{children}</main>
}
