import React from "react";
import ProtectedRoute from "@/Components/protectedRoute";
import { useAuth } from "../context/AuthContext";

const userPage = () => {
  const { user } = useAuth();
  return (
    <div>
      {user.email}
      <button className="bg-blue-700 rounded-md">Cerrar sesion</button>
    </div>
  );
};

export default userPage;
