import React from 'react';
import { Card, CardText, CardTitle } from 'react-md';
import UsersVirtualDataTable from './UsersVirtualDataTable';
import Filter from '../Users/Filter'

const UsersVirtual = () => (
  <Card className="md-cell md-cell--12 md-text-container" style={{height:'94vh'}}>
    <Filter></Filter>
    <UsersVirtualDataTable></UsersVirtualDataTable>
  </Card>
);
export default UsersVirtual;
