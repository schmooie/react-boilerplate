import React from 'react';
import styles from './App.css';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentWillMount() {
    axios.get('/api/yo').then((res) => {
      const { name } = res.data;
      this.setState({ loading: false, name });
    });
  }

  render() {
    const content = this.state.loading ? <h1>Loading...</h1> : this.state.name;
    return (
      <div className={styles.app}>
        {content}
      </div>
    );
  }
}
