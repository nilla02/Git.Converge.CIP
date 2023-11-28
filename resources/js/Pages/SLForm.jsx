import AuthenticatedLayoutAA from '@/Layouts/AuthenticatedLayoutAA';
import { useState, useEffect, } from 'react';
import Footer from '@/Components/Footer';
import Tabs from '@/Components/Tabs';
import Authenticated from '@/Layouts/AuthenticatedSidebar';
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
