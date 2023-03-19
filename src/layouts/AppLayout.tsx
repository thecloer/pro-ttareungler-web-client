import Header from '@/components/Header';
import React, { PropsWithChildren } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className=''>
      <Header />
      {children}
    </div>
  );
}
