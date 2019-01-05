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




class invoice extends React.Component {
  
  render() {
    

    return (
      <Page 
        title="Invoice"
        breadcrumbs={[{ name: 'invoice', active: true }]}>
        <Row>
        <Col >
          <Card>
            <CardHeader>Create New</CardHeader>
            <CardBody>
            <Form check inline>
            <FormGroup check>
              <Label >Client Name:</Label>&nbsp; 
              <Col >
              <Input  size="35"
                type="text"
                name="name"
                placeholder="Enter Project Name"
              />
              </Col>
              </FormGroup>
              <FormGroup  check>
              <Label >Select Project:</Label>&nbsp;
              <Col>
              <Input
              type="select"
              name="selectProject"
              >
                <option>Facebook</option>
                <option>LinkedIn</option>
                <option>Twitter</option>
                <option>Instagram</option>
              </Input>
             </Col>
             </FormGroup>
             <FormGroup check>
              <Label >Amount:</Label>&nbsp; 
              <Col >
              <Input  size="35"
                type="text"
                name="amount"
                placeholder="Enter Amount"
              />
              </Col>
              </FormGroup>
           
              <FormGroup check>
              &nbsp; <Label check>Due Date:</Label>&nbsp;
              <Col >
              <Input  size="35"
                type="date"
                name="dueDate"
              />
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
        <CardHeader>Invoices</CardHeader>
        <CardBody>
        <Table hover>
        <thead>
          <tr>
            <th>REF #</th>
            <th>Client</th>
            <th>Project</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TCK-000005</td>
            <td>Ali</td>
            <td>Facebook</td>
            <td>$1,144.60</td>
            <td><Badge color="success" className="mr-1">Paid</Badge></td>
            <td>08-27-2017  Overdue</td>
          </tr>
          <tr>
          <td>TCK-000001</td>
          <td>Jamal</td>
          <td>LinkedIn</td>
          <td>$1,9999</td>
          <td><Badge color="success" className="mr-1">Paid</Badge></td>
          <td>08-27-2017  Overdue</td>
        </tr>
        <tr>
        <td>TCK-000002</td>
        <td>Hassan</td>
        <td>Twitter</td>
        <td>$6,144.60</td>
        <td><Badge color="success" className="mr-1">Paid</Badge></td>
        <td>08-27-2017  Overdue</td>
      </tr>
      <tr>
      <td>TCK-000006</td>
      <td>Sana</td>
      <td>Instagram</td>
      <td>$1,144.60</td>
      <td><Badge color="warning" className="mr-1">unpaid</Badge></td>
      <td>08-27-2017  Overdue</td>
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
export default invoice;
