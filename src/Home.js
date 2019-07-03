import React, { Component } from 'react';

import {IconList} from 'interra-data-catalog-components'
import { IconListItem } from 'interra-data-catalog-components'
import { Hero } from 'interra-data-catalog-components'
import Blocks from './components/Blocks'
import StatBlock from './components/Blocks/StatBlock'
import backend from './services/backend';
import Loader from 'react-loader-advanced';
import LoadingSpin from 'react-loading-spin';
import FeaturedDatasets from './containers/FeaturedDatasets'
import copy from './assets/copy.json'
import Navbar from './components/NavBar';
//import Navbar from 'interra-data-catalog-components';

class Home extends Component {

  state = {
    "items": [],
    show: true
  }

  async fetchData() {
    const { data } = await backend.get(`/theme`);
    const items = data.map(x => {
      x.ref = `search?theme=${x.data}`;
      x.icon = undefined;
      return x;
    });
    this.setState({
      items,
      show: false
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { items, show } = this.state;

    return (
      <div className="home-page">
        <Navbar />

        <Hero title={copy.hero[0].title} intro={copy.hero[0].intro} />
        <Loader className="icon-list-container" hideContentOnLoad backgroundStyle={{backgroundColor: "#f9fafb"}} foregroundStyle={{backgroundColor: "#f9fafb"}} show={show} message={<LoadingSpin width={"3px"} size="30px" primaryColor={"#007BBC"}/>}>
          <IconList items={ items } component={IconListItem} paneTitle="Dataset Topics" className="opendata-icon-list" />
        </Loader>
        <Blocks items={copy.stats} component={StatBlock} className="StatBlock" />
        <Loader hideContentOnLoad backgroundStyle={{backgroundColor: "#f9fafb"}} foregroundStyle={{backgroundColor: "#f9fafb"}} show={show} message={<LoadingSpin width={"3px"} size="30px" primaryColor={"#007BBC"}/>}>
          {/* <FeaturedDatasets /> */}
        </Loader>
      </div>
    );
  }
}

export default Home;
