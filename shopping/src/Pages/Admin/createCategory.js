import React, { useEffect, useState } from "react";
import Layouts from "../../Components/Layouts/layout";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import { toast } from "react-hot-toast";
import axios from "axios";
import CatForm from "../../Components/Form/CatForm";
import { Modal } from "antd";

const createCategory = () => {
  const [cat, setCat] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState(null);
  const [update, setUpdate] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/Category/create-category",
        {
          name,
        }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCat();
      } else {
        toast.error("Sorry Try Again");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in Input Form");
    }
  };
  
  const getAllCat = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/Category/get-category"
      );
      if (data?.success) {
        setCat(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong in getting Category");
    }
  };

  useEffect(() => {
    getAllCat();
  }, []);

  //update
  const Update = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/Category/update-category/${select._id}`,
        { name: update }
      );
      if (data?.success) {
        toast.success(`${update} Updated Successfully`);
        setSelect(null);
        setUpdate("");
        setVisible(false);
        getAllCat();
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  const Delete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/Category/delete-category/${pId}`,
      );
      if (data?.success) {
        toast.success("Deleted Successfully");
        getAllCat();
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layouts>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2>Create Category</h2>
            <div className="p-3">
              <CatForm submit={submit} value={name} setValue={setName} />
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.map((c) => (
                    <>
                      <tr>
                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button
                            className="btn btn-primary m-1"
                            onClick={() => {
                              setVisible(true);
                              setUpdate(c.name);
                              setSelect(c);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger m-1"
                            onClick={() => {
                              Delete(c._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <CatForm value={update} setValue={setUpdate} submit={Update} />
            </Modal>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default createCategory;
