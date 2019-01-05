import React from 'react';


import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  TabContent,
  TabPane,
  CardTitle,
  CardText,
  Nav,
  NavItem,
  NavLink,
  ListGroupItem,
  Badge,
  Button,
  Table,
} from 'reactstrap';


import Page from 'components/Page';




class notification extends React.Component {
  
  render() {
    

    return (
      <Page 
        title="Notification"
        breadcrumbs={[{ name: 'notification', active: true }]}>
        <Row>
        <Col >
          <Card>
            <CardHeader>Create New</CardHeader>
            <CardBody>
            <Form check inline>
            <FormGroup check>
              <Label >Subject</Label>&nbsp; 
              <Col >
              <Input  size="35"
                type="text"
                name="notificationsubject"
                placeholder="Enter Subject"
              />
              </Col>
              </FormGroup>

              <FormGroup check>
              &nbsp; <Label check>Deadline:</Label>&nbsp;
              <Col >
              <Input  size="35"
                type="date"
                name="dueDate"
              />
              </Col>
            </FormGroup>
              <FormGroup  check>
              <Label >To:</Label>&nbsp;
              <Col>
              <Input
              type="select"
              name="NotificationTo"
              >
                <option>Project Managers</option>
                <option>Developers</option>
                <option>Client</option>
                <option>All</option>
              </Input>
             </Col>
             </FormGroup>
             
           
              
            <FormGroup >
            &nbsp;&nbsp;&nbsp;<Button>Submit</Button>
            </FormGroup>
          </Form>
            </CardBody>
          </Card>
        </Col>    
      </Row>
        <Row>
        <Col>
        <Card>
        <CardHeader>Notification</CardHeader>
        <CardBody>
        <Table hover>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New message added</td>
            <td>30 Nov. 2018</td>
            
          </tr>
          <tr>
          <td>Ticket Assigned</td>
          <td>15 Nov. 2018</td>
         
        </tr>
        <tr>
        <td>New files added</td>
        <td>10 Oct. 2018</td>
        
      </tr>
      <tr>
      <td>New files added</td>
      <td>6 Oct. 2018</td>
      
    </tr>
     
        </tbody>
      </Table>
        </CardBody>
        </Card>
        </Col>
        </Row>
      </Page>
    );
  }
}
export default notification;
