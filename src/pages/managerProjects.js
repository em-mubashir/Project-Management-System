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




class managerProjects extends React.Component {
 
  render() {
    

    return (
      <Page 
        title="Projects"
        breadcrumbs={[{ name: 'projects', active: true }]}>
        <Row>
        <Col >
          <Card>
            <CardHeader>Add New</CardHeader>
            <CardBody>
            <Form check inline>

            
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
           <Label >Team Name:</Label>&nbsp; 
           <Col >
           <Input  size="35"
             type="text"
             name="name"
             placeholder="Enter Project Name"
           />
           </Col>
           </FormGroup>
           <FormGroup check>
                  <Label>
                    Select Developers
                  </Label>
                  <Col >
                    <Input
                      type="select"
                      name="selectMulti"
                      multiple 
                    ><option>Hassan</option>
                    <option>Malik</option>
                    <option>Haris</option>
                    <option>Ali</option></Input>
                  </Col>
                </FormGroup>
           
            <FormGroup check>
              <Label >Project Description:</Label>&nbsp; 
              <Col >
              <Input  size="35"
                type="textarea"
                name="projectDescription"
                placeholder="Enter Description"
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
        <CardHeader>Projects</CardHeader>
        <CardBody>
        
        <Row>
        <Col>
        <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Project</th>
            <th>Team Name</th>
            <th>Developers</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Facebook</td>
            <td>Mr. Irrelevants</td>
            <td>Ali, Hassan, Raza</td>
            <td>10/10/2018</td>
            <td><Badge color="success" className="mr-1">completed</Badge></td>
          </tr>
          <tr>
          <th>2</th>
          <td>Twitter</td>
          <td>Monstars</td>
          <td>Muzamil, Ebad, Mubashir</td>
          <td>10/8/2018</td>
          <td><Badge color="info" className="mr-1">in progress</Badge></td>
          </tr>
          <tr>
          <th>3</th>
          <td>Google</td>
          <td>The Untouchables</td>
          <td>Sanaullah, Shahmeer</td>
          <td>10/12/2018</td>
          <td><Badge color="info" className="mr-1">in progress</Badge></td>
          </tr>
          <tr>
          <th>4</th>
          <td>LinkedIn</td>
          <td>CodeBreakers</td>
          <td>Faisal Kamran</td>
          <td>10/01/2018</td>
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
export default managerProjects;
