import React,{Component } from 'react';
import { Column, Table, AutoSizer  } from 'react-virtualized';
import {observer , inject} from 'mobx-react';

@inject('UserStore')
@observer
class UsersVirtualDataTable extends Component {

  componentDidMount() {
    this.props.UserStore.getUserData();
  }

  render() {
    let {userData} = this.props.UserStore;

    return(
      <AutoSizer>
        {({ width }) => (
                <Table
                  width={width}
                  height={550}
                  headerHeight={20}
                  rowHeight={30}
                  rowCount={userData.length}
                  rowGetter={({ index }) => userData[index]}
                >
                  <Column
                    label='firstname'
                    dataKey='firstname'
                    width={200}
                  />
                  <Column
                    label='lastname'
                    dataKey='lastname'
                    width={200}
                  />
                  <Column
                    label='email'
                    dataKey='email'
                    width={350}
                  />
                  <Column
                    label='agency_name'
                    dataKey='agency_name'
                    width={250}
                  />
                </Table>
            )}
      </AutoSizer>
    );
  }
}

export default UsersVirtualDataTable;
