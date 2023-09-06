import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "../Navbar";

const NoPage = () => {
  const [timer, setTimer] = useState(3);
  const navigate = useNavigate();

  const redirectTime = setTimeout(() => {
    if(timer > 1){
      setTimer(timer-1);
    }else{
      clearTimeout(redirectTime);
      navigate('/');
    }
  }, 1000);

    return (
      <>
      <Navbar />
      <div className="no-page">
        <h1>404</h1>
        <h4>That page can not be found</h4>
        <Link className="no-page-link" to="/">Go to Home page...</Link>
        <h4>The page will redirect in {timer} seconds...</h4>
      </div>
      </>
    );
};
  
export default NoPage;