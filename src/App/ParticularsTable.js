import React from "react";
import { Button, Table } from "react-bootstrap";
import ModalForm from "./ModalForm";

import "bootstrap/dist/css/bootstrap.css";

function ParticularsTable({ particulars, editData, deleteData }) {
  const ParticularBody = particulars === []
    ? (
      <tr>
        <td colspan="3">No entry found</td>
      </tr>
    )
    : (
      particulars.map((particular) => (
        <ParticularRow
          key={particular.id}
          particular={particular}
          editData={editData}
          deleteData={deleteData}
        />
      ))
    );
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{ParticularBody}</tbody>
    </Table>
  );
}

function ParticularRow({ particular, editData, deleteData }) {
  const { firstName, lastName, gender, job, id } = particular;
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td className="d-flex justify-content-between px-4">
        <ModalForm
          id={id}
          mode={"Info"}
          firstName={firstName}
          lastName={lastName}
          job={job}
          gender={gender}
          handleData={() => {}}
        />
        <ModalForm
          id={id}
          mode={"Edit"}
          firstName={firstName}
          lastName={lastName}
          job={job}
          gender={gender}
          handleData={editData}
        />
        <Button variant="danger" onClick={() => deleteData(id)}>
          <i className="fa fa-trash">&nbsp;Delete</i>
        </Button>
      </td>
    </tr>
  );
}

export default ParticularsTable;
