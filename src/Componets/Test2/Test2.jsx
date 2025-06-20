import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Test2 = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) { // تحديد الارتفاع الذي يجب أن يصل إليه المستخدم قبل تثبيت الـ navbar
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={isSticky ? 'navbar sticky' : 'navbar'}>
        {/* <h2>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h2> */}
      </div>
    );
}

export default Test2