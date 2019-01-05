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
  Form,
  FormGroup,
  Label,
  Input,
  Nav,
  NavItem,
  NavLink,
  ListGroupItem,
  Badge,
  Button,
  Table,
} from 'reactstrap';


import Page from 'components/Page';




class order extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    

    return (
      <Page 
        title="Order"
        breadcrumbs={[{ name: 'order', active: true }]}>
        <Row>
        <Col >
          <Card>
            <CardHeader>New Order</CardHeader>
            <CardBody>
            <Form check inline>
            <FormGroup check>
              <Label >Project Name:</Label>&nbsp; 
              <Col >
              <Input
                type="text"
                 name="project name"
              />
               
              </Col>
              </FormGroup>
            <FormGroup check>
              <Label >Project Description:</Label>&nbsp; 
              <Col >
              <Input  
                type="textarea"
                name="projectDescription"
                placeholder="Enter Description"
              />
              </Col>
            </FormGroup>
            
              <FormGroup check>
              &nbsp; <Label check>Deadline:</Label>&nbsp;
              <Col >
              <Input  size="35"
                type="date"
                name="email"
                placeholder="Enter email"
              />
              </Col>
            </FormGroup>
            
            
            <FormGroup check>
            &nbsp;<Label>File:</Label>&nbsp;
            <Input
              type="file"
              name="file"
              />
               
            </FormGroup>
            <FormGroup >
           <Button>Submit</Button>
            </FormGroup>
          </Form>
            </CardBody>
          </Card>
        </Col>    
      </Row>

      
        <Row>
        <Col>
        <Card>
        <CardHeader>Projects</CardHeader>
        <CardBody>
       
        <Row>
        <Col>
        <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Project</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Facebook</td>
            <td>10/10/2018</td>
            <td><Badge color="info" className="mr-1">in progress</Badge></td>
          </tr>
          <tr>
          <th>2</th>
          <td>Twitter</td>
          <td>10/8/2018</td>
          <td><Badge color="success" className="mr-1">Completed</Badge></td>
          </tr>
          <tr>
          <th>3</th>
          <td>Google</td>
          <td>10/12/2018</td>
          <td><Badge color="info" className="mr-1">in progress</Badge></td>
          </tr>
          <tr>
          <th>4</th>
          <td>LinkedIn</td>
          <td>10/01/2018</td>
          <td><Badge color="success" className="mr-1">Completed</Badge></td>
          </tr>
          <tr>
          <th >5</th>
          <td>Tumblr</td>
          <td>01/11/2018</td>
          <td><Badge color="info" className="mr-1">in progress</Badge></td>
          </tr>
        </tbody>
      </Table>
        </Col>
      </Row>
        </CardBody>
        </Card>
        </Col>
        </Row>
      </Page>
    );
  }
}
export default order;
