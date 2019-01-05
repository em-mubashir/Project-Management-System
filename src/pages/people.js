import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from 'reactstrap';

import Page from 'components/Page';

const people = () => {
  return (
    <Page title="People" breadcrumbs={[{ name: 'people',  active: true }]}>
      <Row>
        <Col>
          <Card>
            <CardHeader>Add New</CardHeader>
            <CardBody>
              <Form check inline>
                <FormGroup check>
                  <Label >Name:</Label>&nbsp; 
                  <Col sm={10}>
                  <Input  size="35"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                  />
                  </Col>
                  </FormGroup>
                  <FormGroup check>
                  &nbsp; <Label check>Email:</Label>&nbsp;
                  <Col sm={10}>
                  <Input  size="35"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                  </Col>
                </FormGroup>
                
                <FormGroup  check>
                 <Label >Password:</Label>&nbsp;
                 <Col sm={10}>
                <Input size = "35"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
                </Col>
                </FormGroup>
                <FormGroup check>
                &nbsp;<Label>Type:</Label>&nbsp;
                <Input
                  type="select"
                  name="type"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup >
                &nbsp;&nbsp;&nbsp;<Button>Submit</Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>    
      </Row>

      <Card>
      <CardHeader>List</CardHeader>
      <CardBody>
      <Table hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Type</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Malik</th>
          <td>malik@gmail.com</td>
          <td>client</td>
          
         
        </tr>
        <tr>
        <th scope="row">mubashir</th>
        <td>mubashir@gmail.com</td>
        <td>Developer</td>
        
       
        </tr>
    


  
        <tr>
        <th scope="row">Ebad</th>
        <td>ebad@gmail.com</td>
        <td>project manager</td>
        
        
        </tr>
        <tr>
        <th scope="row">muzamil</th>
        <td>muzamil@gmail.com</td>
        <td>developer</td>
      
        
        </tr>
        
      </tbody>
    </Table>
      </CardBody>
      </Card>
    </Page>
  );
};

export default people;
