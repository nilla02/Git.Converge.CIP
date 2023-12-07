
import { useState, useEffect, } from 'react';
import Tabs from '@/Components/Tabs';
import Guestnavbar from '@/Components/guestnavbar';
export default function Edit({ auth, mustVerifyEmail, status,notifications }) {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
<div>
    <div>
        <Guestnavbar/>
    </div>
<Tabs/>
</div>




    );
}
