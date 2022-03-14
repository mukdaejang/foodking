import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/page-not-found', { replace: true });
  }, [navigate]);
  return (
    <div role="alert" id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <div></div>
          <h1>404</h1>
        </div>
        <h2>Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">home page</Link>
      </div>
    </div>
  );
};

export default NotFound;
