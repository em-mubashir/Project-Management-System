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




class developerNotification extends React.Component {
  
  render() {
    

    return (
      <Page 
        title="Notification"
        breadcrumbs={[{ name: 'developernotification', active: true }]}>
        
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
export default developerNotification;
