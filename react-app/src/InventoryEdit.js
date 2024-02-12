import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './Navbar';

function InventoryEdit() {
  const [item, setItem] = useState({
    prodname: "",
    qty: "",
    price: "",
    status: ""
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchInventory() {
      if (params.id !== 'new') {
        try {
          let response = await fetch(`/api/inventories/${params.id}`);
          const inventory = await response.json();
          setItem(inventory);
        } catch (error) {
          console.error('Fetch failed', error);
        }
      }
    }

    fetchInventory();
  }, [params.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch(`/api/inventories/${item._id || params.id}`, {
        method: item._id ? 'PUT' : 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
      });
      navigate('/inventories');
    } catch (error) {
      console.error('Submit failed', error);
    }
  }

  const title = <h2 className="mt-3">{params.id !== 'new' ? 'Edit Inventory' : 'Add Inventory'}</h2>;

  return (
    <div>
      <AppNavbar />
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="prodname" className="h5 mt-3">Product Name</Label>
            <Input
              type="text"
              name="prodname"
              id="prodname"
              value={item.prodname || ""}
              onChange={handleChange}
              autoComplete="prodname" 
            />
          </FormGroup>
          <FormGroup>
            <Label for="price" className="h5 mt-3">Price</Label>
            <Input
              type="text"
              name="price"
              id="price"
              value={item.price || ""}
              onChange={handleChange}
              autoComplete="price" 
            />
          </FormGroup>
          <FormGroup>
            <Label for="price" className="h5 mt-3">Status</Label>
            <Input
              type="text"
              name="status"
              id="status"
              value={item.status || ""}
              onChange={handleChange}
              autoComplete="status" 
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit" className="mt-3">Save</Button>{" "}
            <Button color="secondary" className="mt-3" tag={Link} to="/inventories/">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default InventoryEdit;
