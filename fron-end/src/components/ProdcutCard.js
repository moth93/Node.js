import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { delProduct, updateProduct } from '../redux/action/Action';


function ProdcutCard({props}) {
  const dispatch=useDispatch()
  const del= ()=>{
   dispatch(delProduct(props._id))
  }
  const [show, setShow] = useState(false);
  const [name, setname] = useState(props.name);
  const [image, setimage] = useState(props.image);
  const [price, setprice] = useState(props.price);
  const [rating, setrating] = useState(props.rating);
  const [description, setdescription] = useState(props.description);
  const data={name,image,price,rating,description}
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const update=()=>{
    dispatch(updateProduct(props._id,data))
    handleClose()
}
  return (<div>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.image}/>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
     {props.description}
    </Card.Text>
    <Button variant="primary" onClick={del}>delete</Button>
    <Button variant="primary" onClick={handleShow}>update</Button>
  </Card.Body>
</Card>

<div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
           defaultValue={props.name}
            autoFocus
            onChange={(e)=>setname(e.target.value)}
          />
          <Form.Label>image</Form.Label>
          <Form.Control
            type="text"
            defaultValue={props.image}
            onChange={(e)=>setimage(e.target.value)}

            autoFocus
          />
          <Form.Label>price</Form.Label>
          <Form.Control
            type="text"
            defaultValue={props.price}
            autoFocus
            onChange={(e)=>setprice(e.target.value)}

          />
          <Form.Label>rating</Form.Label>
          <Form.Control
            type="text"
            defaultValue={props.rating}
            autoFocus
            onChange={(e)=>setrating(e.target.value)}

          />
          <Form.Label>description</Form.Label>
          <Form.Control
            type="text"
            defaultValue={props.description}
            autoFocus
            onChange={(e)=>setdescription(e.target.value)}

          />
        </Form.Group>
        
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={update}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
</div>)
}

export default ProdcutCard