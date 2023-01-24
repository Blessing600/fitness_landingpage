
import { title } from 'process';
import React from 'react';

function NavBarCards({title}: {title: string}) {
  return (
    <div>
        <a href='#' className="text-1rem font-medium text-light-black px-3 py-4">
            {title}
        </a>
    </div>
  );
}

export default NavBarCards;
