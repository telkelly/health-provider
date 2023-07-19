import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

const UserProfile = (props) => {
  const [data, setData] = useState(null);
  const [history,setHistory] = useState(null);
    const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      axios.get(`/user/${userId}`).then((res) => {
        setData(res.data[0]);
      });
      axios.get(`/user/${userId}/history`).then((res) => {
        setHistory(res.data[0]);
        console.log("res", res, "data", data);
      });
    } else {
      navigate("/about");
    }
  }, []);


  return (
    <>
      <h2>User Profile</h2>
      {data ? (
        <>
          <h3>{data.firstname}</h3>
          <h3>{data.lastname}</h3>
          <h3>{data.email}</h3>
          {history && (
            <h1>{history.historyofsymptoms}</h1>
          )}
        </>
      ) : (
        <h1>Try AGAIN</h1>
      )}
    </>
  );
};

export default UserProfile;
