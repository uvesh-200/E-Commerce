import React from "react";
import Layout from "../../Components/Layouts/layout";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <h2 className="text-center">Your Details</h2>
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>User Name: {auth?.user?.name}</h3>
              <h3>User Email: {auth?.user?.email}</h3>
              <h3>User Phone Number: {auth?.user?.phone}</h3>
              <h3>User Address: {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
