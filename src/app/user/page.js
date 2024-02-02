import React from "react";
import ProtectedRoute from "@/Components/protectedRoute";
import { useAuth } from "../context/AuthContext";

const userView = () => {

  return (
    <div>
      <button className="bg-blue-700 rounded-md">Cerrar sesion</button>
    </div>
  );
};

export default userView;
