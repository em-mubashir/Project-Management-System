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

import MapWithBubbles from 'components/MapWithBubbles';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);
class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}>
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Total Projects"
              number="9.8k"
              color="secondary"
              progress={{
                value: 75,
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Upcoming"
              number="5,400"
              color="secondary"
              progress={{
                value: 45,
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Delivered"
              number="3,400"
              color="secondary"
              progress={{
                value: 90,
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Failed"
              number="38%"
              color="secondary"
              progress={{
                value: 60,
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
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Total Revenue{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Total Expense</CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Cost of sales{' '}
                  <Badge color="secondary">$3000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdBubbleChart size={25} color={primaryColor} /> Management
                  costs <Badge color="secondary">$1200</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdShowChart size={25} color={primaryColor} /> Financial costs{' '}
                  <Badge color="secondary">$800</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdPieChart size={25} color={primaryColor} /> Other operating
                  costs <Badge color="secondary">$2400</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>New Products</CardHeader>
              <CardBody>
                {productsData.map(
                  ({ id, image, title, description, right }) => (
                    <ProductMedia
                      key={id}
                      image={image}
                      title={title}
                      description={description}
                      right={right}
                    />
                  )
                )}
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>New Developers</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'name',
                    'date',
                    'participation',
                    '%',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

     

        

        <Row>
          <Col lg="4" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header="Announcement"
              avatarSize={60}
              name="Jamy"
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
export default DashboardPage;
