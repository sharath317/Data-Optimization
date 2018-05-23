import React, {Component } from 'react';
import { Card,DataTable,TableHeader,TableBody,TableRow,TableColumn,Button,Cell } from 'react-md';
import {observer , inject} from 'mobx-react';
import Select from "react-virtualized-select";

@inject('UserStore')
@observer
class Filter extends Component {

  componentDidMount() {
    this.props.UserStore.getUserData();
    this.props.UserStore.filterOptions();
  }

  handleChange = (selectedOption) => {
    this.props.UserStore.handleChange(selectedOption);
  }

  handleOnReset = () => {
    this.props.UserStore.handleOnReset();
  }

  render() {
    let {userData,filterData,selectedOption} = this.props.UserStore;
    filterData = filterData.toJS();

    return (
      <div>
        <Cell size={12} style={{display: 'flex',flexFlow: 'row'}}>
          <Cell size={2}>
            <p style={{padding: '8px',lineHeight: '42px',fontWeight: 600,color: "grey"}}>Search Bar</p>
          </Cell>
          <Cell size={8} style={{padding:"13px 8px"}}>
            <Select
              name="form-field-name"
              value={selectedOption}
              onChange={this.handleChange}
              options={filterData}
              placeholder = {'start typing any field'}
            />
          </Cell>
          <Cell size={2} style={{padding:"6px"}}>
              <Button style={{marginLeft:'auto',marginTop:'8px'}} raised secondary  onClick={this.handleOnReset.bind(this)}>reset</Button>
          </Cell>
        </Cell>
      </div>
    );
  }
}

export default Filter;
