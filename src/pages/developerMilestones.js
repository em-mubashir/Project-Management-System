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




class developerMilestones extends React.Component {
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
        title="Milestones"
        breadcrumbs={[{ name: 'developerMilestones', active: true }]}>
       

      
        <Row>
        <Col>
        <Card>
        <CardHeader>Milestones</CardHeader>
        <CardBody>
        <Nav tabs >
        <NavItem >
          <NavLink
           
            onClick={() => { this.toggle('1'); }}
          >
            In Progress
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
           
            onClick={() => { this.toggle('2'); }}
          >
            Completed
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => { this.toggle('3'); }}
          >
            Failed
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
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
              <td><Badge color="info" className="mr-1">in progress</Badge></td>
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
              <td><Badge color="info" className="mr-1">in progress</Badge></td>
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
        </TabPane>
        <TabPane tabId="2">
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
                <td><Badge color="success" className="mr-1">Completed</Badge></td>
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
              <td><Badge color="success" className="mr-1">Completed</Badge></td>
              </tr>
              <tr>
              <th>4</th>
              <td>LinkedIn</td>
              <td>10/01/2018</td>
              <td><Badge color="success" className="mr-1">Completed</Badge></td>
              </tr>
              
            </tbody>
          </Table>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
        <Row>
        <Col >
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
            <td><Badge color="danger" className="mr-1">Failed</Badge></td>
          </tr>
          <tr>
          <th>2</th>
          <td>Twitter</td>
          <td>10/8/2018</td>
          <td><Badge color="danger" className="mr-1">Failed</Badge></td>
          </tr>
          
        </tbody>
      </Table>
        </Col>
      </Row>
        </TabPane>
      </TabContent>
        </CardBody>
        </Card>
        </Col>
        </Row>
      </Page>
    );
  }
}
export default developerMilestones;
