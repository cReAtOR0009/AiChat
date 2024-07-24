import React, { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigation();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }

    return () => {
      // second
    };
  }, [isLoaded, userId]);

  if (!isLoaded) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <div>Menu</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
