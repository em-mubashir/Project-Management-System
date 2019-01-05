import React from 'react';

import { getColor } from 'utils/colors';

import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
  Table,
} from 'reactstrap';

import {
  MdInsertChart,
  MdBubbleChart,
  MdPieChart,
  MdShowChart,
  MdPersonPin,
} from 'react-icons/lib/md';



import { Line, Bar } from 'react-chartjs-2';

import {
  supportTicketsData,
  productsData,
  userProgressTableData,
  todosData,
  chartjs,
} from 'demos/dashboardPage';

import Page from 'components/Page';

import SupportTicket from 'components/SupportTicket';
import ProductMedia from 'components/ProductMedia';
import UserProgressTable from 'components/UserProgressTable';

import { AnnouncementCard, TodosCard } from 'components/Card';

import { NumberWidget} from 'components/Widget';



class ClientDashboard extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="ClientDashboard"
        title="Client"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <NumberWidget
              title="Total Projects"
              number="9.8k"
              color="secondary"
              progress={{
                value: 75,
              }}
            />
          </Col>

          <Col lg={6} md={12} sm={12} xs={12}>
            <NumberWidget
              title="Delivered"
              number="5,400"
              color="secondary"
              progress={{
                value: 45,
              }}
            />
          </Col>

        </Row>
              <Row>
              <Col>
              <Card body>
              <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project</th>
                  <th>Manager</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Facebook</td>
                  <td>Mark</td>
                  <td>10/10/2018</td>
                  <td><Badge color="danger" className="mr-1">Danger</Badge></td>
                  <td><Badge color="info" pill className="mr-1">Info</Badge></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Twitter</td>
                <td>Evan</td>
                <td>10/8/2018</td>
                <td><Badge color="success" className="mr-1">Completed</Badge></td>
                <td><Badge color="success" pill className="mr-1">100%</Badge></td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Google</td>
                <td>Larry</td>
                <td>10/12/2018</td>
                <td><Badge color="warning" className="mr-1">in progress</Badge></td>
                <td><Badge color="warning" pill className="mr-1">75%</Badge></td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>LinkedIn</td>
                <td>Allen</td>
                <td>10/01/2018</td>
                <td><Badge color="info" className="mr-1">in progress</Badge></td>
                <td><Badge color="info" pill className="mr-1">65%</Badge></td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td>Tumblr</td>
                <td>David</td>
                <td>01/11/2018</td>
                <td><Badge color="danger" className="mr-1">in progress</Badge></td>
                <td><Badge color="warning" pill className="mr-1">95%</Badge></td>
                </tr>
              </tbody>
            </Table>
              </Card>
            </Col>
              </Row>
        <Row>
          <Col lg="4" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header="Announcement"
              avatarSize={60}
              name="Sana"
              date="1 hour ago"
              text="Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna"
              buttonProps={{
                children: 'show',
              }}
              style={{ height: 500 }}
            />
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Support Tickets</span>
                  <Button>
                    <small>View All</small>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {supportTicketsData.map(supportTicket => (
                  <SupportTicket key={supportTicket.id} {...supportTicket} />
                ))}
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <TodosCard todos={todosData} />
          </Col>
        </Row>

      </Page>
    );
  }
}
export default ClientDashboard;
