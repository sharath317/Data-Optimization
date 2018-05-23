import React from 'react';
import { Card, CardText, CardTitle } from 'react-md';
import UsersDataTable from './UsersDataTable';
import Filter from './Filter';

const Users = () => (
  <Card className="md-cell md-cell--12 md-text-container">
      <Filter></Filter>
      <UsersDataTable></UsersDataTable>
  </Card>
);
export default Users;
