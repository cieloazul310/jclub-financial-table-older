import React, { Component } from "react";
import { Grid, Row, Col, Tab } from "react-bootstrap";
import Sidebar from "react-sidebar";

import ClubSelector from "./components/ClubSelector";
import AppHeader from "./components/AppHeader";
import {
  PaneController,
  MobilePaneController
} from "./components/PaneController";
import PLPane from "./components/panes/PLPane";
import BSPane from "./components/panes/BSPane";
import RevPane from "./components/panes/RevPane";
import ExpPane from "./components/panes/ExpPane";
import AttdPane from "./components/panes/AttdPane";

import club from "./dataset/1.json";

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: club,
      tab: "pl",
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
    this.fetchItem = this.fetchItem.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.parseHash = this.parseHash.bind(this);
    this.setHash = this.setHash.bind(this);

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  cache = { 1: club };

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.parseHash();
  }

  componentDidMount() {}

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  fetchItem(id) {
    return import(`./dataset/${id}.json`).then(json => {
      this.setState({ item: json, sidebarOpen: false }, () => {
        this.cache[id] = json;
      });
    });
  }

  selectItem(id) {
    if (this.cache[id]) {
      this.setState({ item: this.cache[id], sidebarOpen: false }, () => {
        this.setHash();
      });
    } else {
      this.fetchItem(id).then(() => {
        this.setHash();
      });
    }
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  handleTab(key) {
    this.setState(
      {
        tab: key
      },
      () => {
        this.setHash();
      }
    );
  }

  parseHash() {
    // # club = 1 & tab = pl

    if (window.location.hash === "") return;
    const hash = window.location.hash;
    const parts = hash.slice(1).split("&");
    const status = {};

    parts.forEach((part, i) => {
      const [key, val] = part.split("=");
      if (key === "item") {
        status[key] = parseInt(val, 10);
      } else if (key === "tab") {
        status[key] = val;
      }
    });

    this.fetchItem(status.item).then(() => {
      this.setState(
        prev => ({
          tab: status.tab || prev.tab
        }),
        () => {
          this.setHash();
        }
      );
    });
    /*
    this.setState(
      prev => ({
        item: status.item || prev.item,
        tab: status.tab || prev.tab
      }),
      () => {
        console.log("hash parsed!");
        console.log(status);
      }
    );
    */
  }

  setHash() {
    const { item, tab } = this.state;
    const hash = `#item=${item.id}&tab=${tab}`;

    window.history.pushState(this.state, "", hash);
  }

  render() {
    const { item, tab } = this.state;
    const data = Object.values(item.data);
    return (
      <div>
        <Sidebar
          sidebar={
            <ClubSelector selectedId={item.id} onItemClick={this.selectItem} />
          }
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
        >
          <Grid fluid>
            <AppHeader
              title={item.fullName}
              onSetSidebarOpen={this.onSetSidebarOpen}
            />
            <Tab.Container id="tabs" activeKey={tab} onSelect={this.handleTab}>
              <Row>
                <PaneController />
                <MobilePaneController handleTab={this.handleTab} />
                <Col xs={12} sm={12}>
                  <Tab.Content animation>
                    <PLPane eventKey="pl" data={data} />
                    <BSPane eventKey="bs" data={data} />
                    <RevPane eventKey="revenue" data={data} />
                    <ExpPane eventKey="expense" data={data} />
                    <AttdPane eventKey="attd" data={data} />
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Grid>
        </Sidebar>
      </div>
    );
  }
}

export default App;
