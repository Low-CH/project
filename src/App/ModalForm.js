import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Input from "../Components/Input";
import Select from "../Components/Select";
import "font-awesome/css/font-awesome.css";

function ModalForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const { firstName, lastName, job } = props;
    setFirstName(firstName);
    setLastName(lastName);
    setJob(job);
  }, [props]);

  const changeFirstName = useCallback((event) => {
    setFirstName(event.target.value);
  }, [setFirstName]);

  const changeLastName = useCallback((event) => {
    setLastName(event.target.value);
  }, [setLastName]);

  const changeJob = useCallback((event) => {
    setJob(event.target.value);
  }, [setJob]);

  const handleClose = () => {
    // reset back the default
    setFirstName(props.firstName);
    setLastName(props.lastName);
    setJob(props.job);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    handleClose();
    data.id = props.id;
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setJob(data.job);
    return props.handleData(data);
  };

  let Title = "";
  let PopupButton = "";
  let SubmitButton = "";
  let disabled = false;
  switch (props.mode) {
    case "Add":
      Title = <Modal.Title>Add Particulars</Modal.Title>;
      PopupButton = (
        <Button variant="success" onClick={handleShow}>
          <i className="fa fa-plus-circle">&nbsp;Add</i>
        </Button>
      );
      SubmitButton = (
        <button className="btn btn-success" type="submit">
          Add Particulars
        </button>
      );
      break;
    case "Edit":
      Title = <Modal.Title>Edit Particulars</Modal.Title>;
      PopupButton = (
        <Button variant="warning" onClick={handleShow}>
          <i className="fa fa-pencil-square-o">&nbsp;Edit</i>
        </Button>
      );
      SubmitButton = (
        <button className="btn btn-warning" type="submit">
          Edit Particulars
        </button>
      );
      break;
    default:
      Title = <Modal.Title>Particulars Info</Modal.Title>;
      PopupButton = (
        <Button variant="info" onClick={handleShow}>
          <i className="fa fa-info-circle">&nbsp;Info</i>
        </Button>
      );
      SubmitButton = (
        <button className="btn">&nbsp;</button>
      );
      disabled = true;
      break;
  }
  return (
    <>
      {PopupButton}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>{Title}</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="col-md-6">
                <Input
                  label={"First name"}
                  name={"firstName"}
                  nameErrors={errors.firstName}
                  register={register}
                  minLength={3}
                  value={firstName}
                  onChange={(changeFirstName)}
                  disabled={disabled}
                />
              </div>
              <div className="col-md-6">
                <Input
                  label={"Last name"}
                  name={"lastName"}
                  nameErrors={errors.lastName}
                  register={register}
                  minLength={3}
                  value={lastName}
                  onChange={changeLastName}
                  disabled={disabled}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12">
                <Input
                  label={"Job"}
                  name={"job"}
                  nameErrors={errors.job}
                  register={register}
                  minLength={5}
                  value={job}
                  onChange={changeJob}
                  disabled={disabled}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12">
                <Select
                  label={"Gender"}
                  name={"gender"}
                  values={["Male", "Female"]}
                  register={register}
                  selected={props.gender}
                  disabled={disabled}
                />
              </div>
            </div>
            <div className="d-flex flex-row-reverse pb-3">
              {SubmitButton}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;
