import React, { Component } from 'react';

import {IconList} from 'interra-data-catalog-components'
import { IconListItem } from 'interra-data-catalog-components'
import { Hero } from 'interra-data-catalog-components'
import Blocks from './components/Blocks'
import StepsBlock from './components/Blocks/StepsBlock'
import StatBlock from './components/Blocks/StatBlock'
import backend from './services/backend';
import Loader from 'react-loader-advanced';
import LoadingSpin from 'react-loading-spin';
import FeaturedDatasets from './containers/FeaturedDatasets'
import copy from './assets/copy.json'
import image from './assets/images/waves.jpg'

class Home extends Component {

  state = {
    "items": [],
    show: true
  }

  async fetchData() {
    const { data } = await backend.get(`/collections/theme.json`);
    const items = data.map(x => {
      let item = {
        identifier: x.identifier,
        ref: `search?theme=${x.title}`,
        title: x.title,
        icon: x.image,
      }
      return item
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
        <Hero title={copy.hero[0].title} intro={copy.hero[0].intro} />
        <Loader className="icon-list-container" hideContentOnLoad backgroundStyle={{backgroundColor: "#f9fafb"}} foregroundStyle={{backgroundColor: "#f9fafb"}} show={show} message={<LoadingSpin width={"3px"} size="30px" primaryColor={"#007BBC"}/>}>
          <IconList items={ items } component={IconListItem} paneTitle="Dataset Topics" className="pqdc-icon-list" />
        </Loader>
        <Blocks items={copy.api} component={StepsBlock} type="StepsBlock" paneTitle="Getting Started with Open Data" />
        <Blocks items={copy.stats} component={StatBlock} type="StatBlock" />
        <Loader hideContentOnLoad backgroundStyle={{backgroundColor: "#f9fafb"}} foregroundStyle={{backgroundColor: "#f9fafb"}} show={show} message={<LoadingSpin width={"3px"} size="30px" primaryColor={"#007BBC"}/>}>
          <FeaturedDatasets />
        </Loader>
      </div>
    );
  }
}

export default Home;
