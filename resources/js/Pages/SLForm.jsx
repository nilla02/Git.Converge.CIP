import AuthenticatedLayoutAA from '@/Layouts/AuthenticatedLayoutAA';
import { useState, useEffect, } from 'react';
import Footer from '@/Components/Footer';
import Tabs from '@/Components/Tabs';
import Authenticated from '@/Layouts/AuthenticatedSidebar';

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
        <AuthenticatedLayoutAA
            user={auth.user}
            notifications={notifications}
        >

          <Authenticated user={auth.user}/>
          <div className="py-12">
                <div className="lg:ml-[220px] sm:px-6 lg:px-8">
                    <div className=" overflow-hidden shadow-sm sm:rounded-lg">
        <Tabs/>

</div></div></div>

        </AuthenticatedLayoutAA>
    );
}
