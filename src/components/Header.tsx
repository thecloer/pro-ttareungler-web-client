import siteMeta from '@/config/sitemeta';
import React from 'react';
import IconButton from './IconButton';

function Header() {
  return (
    <div className='border-b-2'>
      <div className='container mx-auto h-16 flex items-center justify-between'>
        <div className='text-xl font-semibold'>프로 따릉러</div>
        <div>
          <IconButton
            kind='github'
            href={siteMeta.githubUrl}
            className='text-sm text-primary-400 transition-colors hover:text-primary-500'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
