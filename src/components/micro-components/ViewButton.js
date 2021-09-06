import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { PostContext } from "../../context/PostContext";

const ViewButton = ({ id }) => {
  // Destructured from context postcontext for take the state of getpostbyid
  const { getPostById } = useContext(PostContext);

  const handleDetail = () => {
    getPostById(id);
  };

  return (
    <Button variant="success" onClick={handleDetail}>
      View
    </Button>
  );
};

export default ViewButton;
