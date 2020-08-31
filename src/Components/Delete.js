import React, { memo } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

function Delete({ onClick }) {
  return (
    <>
      <Button variant="danger" onClick={onClick}>
        <i className="fa fa-trash">&nbsp;Delete</i>
      </Button>
    </>
  );
}

export default memo(Delete);
