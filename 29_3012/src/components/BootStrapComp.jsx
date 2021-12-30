import React from "react";

import { Table, Form, Button } from "react-bootstrap";

const BootStrapComp = () => {
  return (
    <div className="container">
      <h3>Bootstrap App</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
        aspernatur et vitae, repellat error provident voluptatibus officia
        fugiat minus suscipit! Commodi sed doloribus vitae? Rem modi nisi maxime
        ea voluptatibus?
      </p>

      <Form>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control type="text" name="username" />
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form>

      <br />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Krishna</td>
            <td>shinde</td>
            <td>@ich</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Abhishek</td>
            <td>Shinde</td>
            <td>@kolha</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>


    </div>
  );
};

export default BootStrapComp;
