import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/action/Action';
import axios from 'axios';

function AddProduct() {
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [image, setimage] = useState([]);
  const [price, setprice] = useState(0);
  const [rating, setrating] = useState(0);
  const [description, setdescription] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const dispatch=useDispatch()
const formaData1=new FormData()
formaData1.append('file',name)

const add=async()=>{
  const formaData=new FormData()
  formaData.append('file',image)
  formaData.append('upload_preset','ml_default')
  console.log(formaData)
 if(image.length===undefined){
  await axios.post('https://api.cloudinary.com/v1_1/ducysfqbh/upload',formaData).then((res)=>
  { 
    console.log(res)
    const data={name,image:res.data.url,price,rating,description}
    dispatch(addProduct(data))})} 
    handleClose()
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add product
      </Button>

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
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>setname(e.target.value)}
              />
              <Form.Label>image</Form.Label>
              <Form.Control
                type="file"
                accept='image/*,.mp4'
                placeholder="name@example.com"
                onChange={(e)=>setimage(e.target.files[0])}

                autoFocus
              />
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>setprice(e.target.value)}

              />
              <Form.Label>rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>setrating(e.target.value)}

              />
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
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
          <Button variant="primary" onClick={add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProduct;