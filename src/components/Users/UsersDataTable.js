import React, {Component } from 'react';
import { Card,DataTable,TableHeader,TableBody,TableRow,TableColumn,Button } from 'react-md';
import {observer , inject} from 'mobx-react';

@inject('UserStore')
@observer
class UsersDataTable extends Component {

  componentDidMount() {
    this.props.UserStore.getUserData();
  }

  render() {
    let {userData} = this.props.UserStore;

    return (
      <div style={{padding:'0 12px 12px'}}>
        <Card style={{width: '100%'}}>
          <DataTable plain baseId="dynamic-content-userData">
            <TableHeader>
              <TableRow>
                <TableColumn key={'firstname'} plain>{'firstname'}</TableColumn>
                <TableColumn key={'lastname'} plain>{'lastname'}</TableColumn>
                <TableColumn key={'email'} plain>{'email'}</TableColumn>
                <TableColumn key={'agency_name'} plain>{'agency_name'}</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData.map(({firstname,lastname, email,agency_name }) => (
                <TableRow key={email+firstname+lastname+agency_name}>
                  <TableColumn plain>{firstname}</TableColumn>
                  <TableColumn plain>{lastname}</TableColumn>
                  <TableColumn plain>{email}</TableColumn>
                  <TableColumn plain>{agency_name}</TableColumn>
                </TableRow>
              ))}
            </TableBody>
          </DataTable>
        </Card>
      </div>
    );
  }
}

export default UsersDataTable;
