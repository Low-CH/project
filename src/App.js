import React, { useEffect, useState } from "react";
import ModalForm from "./App/ModalForm";
import ParticularsTable from "./App/ParticularsTable";
import swal from "sweetalert";
import {
  fetchParticulars,
  addParticular,
  editParticular,
  deleteParticular,
} from "./Routes/Particulars";

import "bootstrap/dist/css/bootstrap.css";
function App() {
  /*
    TODO:
    1) Setup another temporary backend, with a README.md
       README.md should include a youtube source for reference + trust
       Change the port if neccessary for the CORS handling
    5) Push to github, email to future employeer and see if he/she likes or not
  */
  const [particulars, setParticulars] = useState([]);
  async function fetchData() {
    try {
      const response = await fetchParticulars;
      setParticulars(response.data.data);
    } catch (error) {
      setParticulars([]);
    }
  }

  async function addData(entry) {
    try {
      const response = await addParticular(entry);
      setParticulars(response.data.data);
      swal({
        title: "Add Particular",
        text: "You have added a particular successfully!",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      swal({
        title: "Add Particular",
        text: "Unable to add a particular!",
        icon: "error",
      });
    }
  }

  async function editData(entry) {
    try {
      const response = await editParticular(entry);
      setParticulars(response.data.data);
      swal({
        title: "Edit Particular",
        text: "You have edited a particular successfully!",
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Edit Particular",
        text: error.response.data.msg,
        icon: "error",
      });
    }
  }
  async function deleteData(entry) {
    try {
      const response = await deleteParticular(entry);
      setParticulars(response.data.data);
      swal({
        title: "Delete Particular",
        text: "You have deleted a particular successfully!",
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Delete Particular",
        text: "Unable to delete a particular!",
        icon: "error",
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1>Personnel Particulars Management</h1>
            <div className="d-flex flex-row-reverse">
              <ModalForm
                id={0}
                mode={"Add"}
                firstName={""}
                lastName={""}
                job={""}
                gender={""}
                handleData={addData}
              />
            </div>
            <ParticularsTable
              particulars={particulars}
              editData={editData}
              deleteData={deleteData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
