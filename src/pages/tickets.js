import React from 'react';


import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
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




class tickets extends React.Component {
  
  render() {
    

    return (
      <Page 
        title="Tickets"
        breadcrumbs={[{ name: 'tickets', active: true }]}>
       
        <Row>
        <Col>
        <Card>
        <CardHeader>Support Tickets</CardHeader>
        <CardBody>
        <Table hover>
        <thead>
          <tr>
            <th>REF #</th>
            <th>Ticket</th>
            <th>Project</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TCK-000005</td>
            <td>Installation issue</td>
            <td>Scrum</td>
            <td><Badge color="warning" className="mr-1">new</Badge></td>
          </tr>
          <tr>
          <td>TCK-000001</td>
          <td>Server Error</td>
          <td>Facebook</td>
          <td><Badge color="warning" className="mr-1">new</Badge></td>
          </tr>
          <tr>
          <td>TCK-000003</td>
          <td>Sample</td>
          <td>Twitter</td>
          <td><Badge color="success" className="mr-1">Done</Badge></td>
          </tr>
          <tr>
          <td>TCK-000009</td>
          <td>Installation issue</td>
          <td>Linkedin</td>
          <td><Badge color="warning" className="mr-1">New</Badge></td>
          </tr>
          <tr>
          <td>TCK-000007</td>
          <td>Server Error</td>
          <td>Scrum</td>
          <td><Badge color="success" className="mr-1">Done</Badge></td>
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
export default tickets;
