import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ProductDetail = ({product,count}) => {

    const {title,image,description,category} = product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="success" onClick={handleShow}>
          Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <img className='img-fluid w-50 me-3' src={image}  alt="" />
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{category}</Modal.Body>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={count}>
              Add Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ProductDetail;