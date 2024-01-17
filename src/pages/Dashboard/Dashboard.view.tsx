import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      navigate('/dashboard/overview');
    }
  }, []);

  return (
    <div id="shipments" className="bg-white-off h-screen">
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
};

export default DashboardPage;
