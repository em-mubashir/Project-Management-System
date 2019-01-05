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




class viewinvoice extends React.Component {
  
  render() {
    

    return (
      <Page 
        title="View invoice"
        breadcrumbs={[{ name: 'viewinvoice', active: true }]}>
        
        <Row>
        <Col>
        <Card>
        <CardHeader>Invoices</CardHeader>
        <CardBody>
        <Table hover>
        <thead>
          <tr>
            <th>REF #</th>
            <th>Project</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Pay Now</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TCK-000005</td>
            <td>Facebook</td>
            <td>$1,144.60</td>
            <td><Badge color="success" className="mr-1">Paid</Badge></td>
            <td>08-27-2017  Overdue</td>
          </tr>
          <tr>
          <td>TCK-000001</td>
          <td>LinkedIn</td>
          <td>$1,9999</td>
          <td><Badge color="success" className="mr-1">Paid</Badge></td>
          <td>08-27-2017  Overdue</td>
        </tr>
        <tr>
        <td>TCK-000002</td>
        <td>Twitter</td>
        <td>$6,144.60</td>
        <td><Badge color="success" className="mr-1">Paid</Badge></td>
        <td>08-27-2017  Overdue</td>
      </tr>
      <tr>
      <td>TCK-000006</td>
      <td>Instagram</td>
      <td>$1,144.60</td>
      <td><Badge color="warning" className="mr-1">unpaid</Badge></td>
      <td>08-27-2017  Overdue</td>
      <td><Button>Pay Now</Button></td>
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
export default viewinvoice;
