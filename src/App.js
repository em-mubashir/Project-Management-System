import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout, clientLayout } from 'components/Layout';
import AuthModalPage from 'pages/AuthModalPage';
import AuthPage from 'pages/AuthPage';
// pages
import landingPage from 'pages/landingPage';
import DashboardPage from 'pages/DashboardPage';
import DashboardDeveloper from 'pages/DashboardDeveloper';
import ClientDashboard from 'pages/ClientDashboard';
import ManagerDashboard from 'pages/ManagerDashboard';
import people from 'pages/people';
import stickynotes from 'pages/stickynotes';
import projects from 'pages/projects';
import tickets from 'pages/tickets';
import invoice from 'pages/invoice';
import notification from 'pages/notification';
import milestones from 'pages/milestones';
import order from 'pages/order';
import viewinvoice from 'pages/viewinvoice';
import generateTickets from 'pages/generateTickets';
import managerProjects from 'pages/managerProjects';
import developerNotification from 'pages/developerNotification';
import developerMilestones from 'pages/developerMilestones';

import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/reduction.css';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />
            <LayoutRoute
              exact
              path="/login-modal"
              layout={MainLayout}
              component={AuthModalPage}
            />
            <LayoutRoute
              exact
              path="/"
              layout={MainLayout}
              component={DashboardPage}
            />
            <LayoutRoute
            exact
            path="/DashboardDeveloper"
            layout={MainLayout}
            component={DashboardDeveloper}
          />
         
            <LayoutRoute
            exact
            path="/ManagerDashboard"
            layout={MainLayout}
            component={ManagerDashboard}
          />
          <LayoutRoute
            exact
            path="/ClientDashboard"
            layout={MainLayout}
            component={ClientDashboard}
          />
          <LayoutRoute
            exact
            path="/people"
            layout={MainLayout}
            component={people}
          />
          <LayoutRoute
            exact
            path="/landingPage"
            layout={EmptyLayout}
            component={landingPage}
          />
          <LayoutRoute
            exact
            path="/stickynotes"
            layout={MainLayout}
            component={stickynotes}
          />
          <LayoutRoute
            exact
            path="/projects"
            layout={MainLayout}
            component={projects}
          />
          <LayoutRoute
            exact
            path="/tickets"
            layout={MainLayout}
            component={tickets}
          />
          <LayoutRoute
          exact
          path="/invoice"
          layout={MainLayout}
          component={invoice}
        />
        <LayoutRoute
        exact
        path="/notification"
        layout={MainLayout}
        component={notification}
        />
        <LayoutRoute
        exact
        path="/milestones"
        layout={MainLayout}
        component={milestones}
        />

        <LayoutRoute
        exact
        path="/order"
        layout={MainLayout}
        component={order}
        />
        <LayoutRoute
        exact
        path="/viewinvoice"
        layout={MainLayout}
        component={viewinvoice}
        />
        <LayoutRoute
        exact
        path="/generateTickets"
        layout={MainLayout}
        component={generateTickets}
        />
        <LayoutRoute
        exact
        path="/managerProjects"
        layout={MainLayout}
        component={managerProjects}
        />
        <LayoutRoute
        exact
        path="/developerNotification"
        layout={MainLayout}
        component={developerNotification}
        />
        <LayoutRoute
        exact
        path="/developerMilestones"
        layout={MainLayout}
        component={developerMilestones}
        />
       
            <LayoutRoute
              exact
              path="/register"
              layout={MainLayout}
              component={AuthPage}
            />
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
