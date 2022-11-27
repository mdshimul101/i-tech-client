import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useStatus = () => {
  const { user } = useContext(AuthContext);
  const [userSatus, setUserStatus] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/users/status?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUserStatus(data.status);
          setIsAdminLoading(false);
        });
    }
  }, [user?.email]);
  return [userSatus, isAdminLoading];
};

export default useStatus;
