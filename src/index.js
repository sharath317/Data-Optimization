import React from "react";
import { render } from "react-dom";
import UserStore from './stores/UserStore.js';
import Users from './components/Users/Users';
import UsersVirtual from './components/UsersVirtual/UsersVirtual';
import {Provider} from 'mobx-react';
import { TabsContainer, Tabs, Tab } from 'react-md';
import './index.css';

render(
  <Provider UserStore={UserStore}>
    <div>
      <TabsContainer panelClassName="md-grid" colored>
        <Tabs tabId="simple-tab">
          <Tab label="react-virtualized">
            <UsersVirtual/>
          </Tab>
          <Tab label="md-table">
            <Users/>
          </Tab>
        </Tabs>
      </TabsContainer>
    </div>
  </Provider>,
  document.getElementById("root")
);
