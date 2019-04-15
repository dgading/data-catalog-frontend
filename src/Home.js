import React, { Component } from 'react'
//import { IconList } from 'interra-data-catalog-components'
import IconList from './components/IconList'
import IconListItem from './components/IconListItem'
import { Hero } from 'interra-data-catalog-components'
import backend from './services/backend'
import Loader from 'react-loader'
import image from './assets/images/waves.jpg'

class Home extends Component {

	state = {
    items: [],
		loaded: false
	}

  async fetchData() {
		const { data } = await backend.get(`/collections/theme.json`);
		const items = data.map(x => {
			let item = {
				identifier: x.identifier,
        ref: `search?theme=${x.identifier}`,
        title: x.title,
        //icon: x.icon,
			}
			return item
		});
		this.setState({
      items,
      "loaded": true
    });
	}

	componentDidMount() {
		this.fetchData();
	}

	render() {
    const { items, loaded } = this.state;
		return (
			<>
				<Hero image={image}/>
				<Loader loaded={loaded}>
					<IconList items={ items } component={ IconListItem } paneTitle="Dataset Topics" />
				</Loader>
			</>
		);
	}
}

export default Home;
