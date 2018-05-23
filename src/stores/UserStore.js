import { observable , computed , action } from "mobx";
import {data} from '../components/Users/UsersData';

class UserStore {

  @observable userData = [];
  @observable filterData = [];
  @observable selectedOption: '';

  @action getUserData = () => {
      this.userData = data.map(function (user,index) {
        if(user.firstname == "" ||user.firstname== "NULL" ||user.firstname == null){
          user.firstname = '-';
        }
        if(user.lastname == "" ||user.lastname== "NULL" ||user.lastname == null){
          user.lastname = '-';
        }
        if(user.agency_name == "" ||user.agency_name== "NULL" ||user.agency_name == null){
          user.agency_name = '-';
        }
          return {
             firstname: user.firstname, lastname: user.lastname , email: user.email ,agency_name: user.agency_name
          };
      });
  }

  @action filterOptions() {
    this.filterData = data.map(function (user,index) {
        return {
           value: index, label: user.firstname +"  " + user.lastname +"  " + user.email +"  " + user.agency_name
        };
    });
  }

  @action handleChange = (selectedOption) => {
    if(selectedOption == null){
      this.userData = data;
    }
    else{
      this.userData = [data[selectedOption.value]];
    }
    this.selectedOption = selectedOption;
  }

  @action handleOnReset = () => {
    this.userData = data;
  }
}

export default new UserStore();
