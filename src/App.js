import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import HostelAdView from './containers/HostelAdView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, data: null};
    this.loadData.bind(this);
  }

  loadData() {
    fetch('/.netlify/functions/hostel_ad')
      .then(response => response.json())
      .then(json => this.setState({loading: false, data: json}))
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
        <Layout>
          <HostelAdView loading={this.state.loading} data={this.state.data} />
        </Layout>
    );
  }
}

export default App;
