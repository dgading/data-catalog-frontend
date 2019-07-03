import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import links from './assets/menu.json';

import Home from "./Home"
import Search from "./Search"
import Dataset from "./Dataset";
import About from "./About";
import Topics from "./Topics";

import Theme from './theme/default'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './theme/globalStyles';


class App extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    console.log("handle Open Modal")
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    console.log("handle Close Modal")
    this.setState({ showModal: false });
  }
  render() {

    const home =   <Home />
    const search = <Search />
    const about = <About />
    const topics = <Topics />
    const headerSearch = this.props.header ? this.props.header : true;

    return (
      <div>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Router>
            <div>

              {headerSearch === 'false' ? <Header/> : <Header search='true'/> }
              <Route exact={true} path='/' render={()=>(home)} />
              <Route exact={true} path='/home' render={()=>(home)} />
              <Route exact={true} path='/search' render={()=>(search)}/>
              <Route exact={true} path='/dataset/:id' render={({match})=>(
                <Dataset
                  id={match.params.id}
                  modal={{
                    open: this.handleOpenModal,
                    close: this.handleCloseModal,
                    showModal: this.state.showModal}}
                />
                )}/>
              <Route exact={true} path='/about' render={()=>(about)} />
              <Route exact={true} path='/topics' render={()=>(topics)} />
            </div>
          </Router>
          <Footer links={links}/>
        </div>
      </ThemeProvider>
      </div>
    );
  }
}

export default App;
