import React from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';

import Page from 'components/Page';

const stickynotes = () => {
  return (
    <Page title="Sticky Notes" breadcrumbs={[{ name: 'stickynotes',  active: true }]}>
      <Row>
        <Col >
          <Card>
            <CardHeader>Add New</CardHeader>
            <CardBody>
              <Form check inline>
                <FormGroup check>
                  <Col sm={10}>
                  <Input  
                    type="textarea"
                    name="stickeyText"
                    placeholder="Enter Text"
                  />
                  </Col>
                  </FormGroup>
                  <FormGroup check>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Label >File</Label> &nbsp;&nbsp;&nbsp;
                  <Input type="file" name="file" />
                  
                </FormGroup>
                
                <FormGroup>
                  <Button>ADD</Button>
                </FormGroup>
               
              </Form>
            </CardBody>
          </Card>
        </Col>    
      </Row>

      <Card>
      <CardHeader>Notes</CardHeader>
      <CardBody>
      <Table hover>
      <thead>
        <tr>
          <th>Text</th>
          <th>File</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test test test </td>
          <td>new</td>
          <td>
          <UncontrolledButtonDropdown addonType="append">
                  <DropdownToggle caret>
                    
            </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
            </UncontrolledButtonDropdown>
          </td>
        </tr>
        <tr>
        <td>test test test </td>
        <td>new</td>
          <td><UncontrolledButtonDropdown addonType="append">
          <DropdownToggle caret>
            
    </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Delete</DropdownItem>
          </DropdownMenu>
    </UncontrolledButtonDropdown></td>
        </tr>
        <tr>
        <td>test test test </td>
        <td>new</td>
          <td><UncontrolledButtonDropdown addonType="append">
          <DropdownToggle caret>
            
    </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Delete</DropdownItem>
          </DropdownMenu>
    </UncontrolledButtonDropdown></td>
        </tr>
        <tr>
        <td>test test test </td>
        <td>new</td>
          <td><UncontrolledButtonDropdown addonType="append">
          <DropdownToggle caret>
            
    </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Delete</DropdownItem>
          </DropdownMenu>
    </UncontrolledButtonDropdown></td>
        </tr>
      </tbody>
    </Table>
      </CardBody>
      </Card>
    </Page>
  );
};

export default stickynotes;
