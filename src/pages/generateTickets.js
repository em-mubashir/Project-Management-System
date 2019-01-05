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
  FormGroup,
  Label,
  Input,
  Form,
  Badge,
  Button,
  Table,
} from 'reactstrap';


import Page from 'components/Page';




class generateTickets extends React.Component {
  
  render() {
    

    return (
      <Page 
        title="Generate Tickets"
        breadcrumbs={[{ name: 'generateTickets', active: true }]}>
        <Row>
        <Col >
          <Card>
            <CardHeader>Create New</CardHeader>
            <CardBody>
            <Form check inline>
            <FormGroup check>
              <Label >Subject:</Label>&nbsp; 
              <Col >
              <Input  size="35"
                type="text"
                name="name"
                placeholder="Enter Project Name"
              />
              </Col>
              </FormGroup>
           
            <FormGroup  check>
             <Label >Project:</Label>&nbsp;
             <Col>
             <Input
             type="select"
             name="selectProject"
             >
               <option>Facebook</option>
               <option>Twitter</option>
               <option>Instagram</option>
               <option>Linkedin</option>
             </Input>
            </Col>
            </FormGroup>

            <FormGroup check>
            &nbsp;<Label>Add Attachment:</Label>&nbsp;
            <Input
              type="file"
              name="file"
              />
               
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
export default generateTickets;
