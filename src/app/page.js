import React from 'react';

      function Page() {
        const dateTime = new Date();

        return (
          <div className='min-h-screen flex flex-col justify-center items-center bg-blue-300'>
            <div className='text-yellow-200 text-4xl mb-4'>Hello World</div>
            <div className='text-yellow-200 text-2xl'>
              {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
            </div>
          </div>
        );
      }

      export default Page;