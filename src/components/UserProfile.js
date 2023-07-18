import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import axios from "axios";

const UserProfile = () => {
    const navigate = useNavigate();
  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          const decodedToken = jwt_decode(token);
          axios.get('/')
      } else {
          navigate('/about')
      }
  }, [])

  return <h2>User Profile</h2>;
};

export default UserProfile;
