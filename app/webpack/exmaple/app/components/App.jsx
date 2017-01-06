import React, {Component} from 'react';
import Layout from './Layout';
import Counter from './Counter';
import styles from './App.css';

require('./test.css')

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

class App extends Component {
    render() {
        return (
            <Layout>
                <div className={styles.app}>
                    <h2 className='color'>Hello2</h2>
                    <Counter />
                </div>
            </Layout>
        );
    }
}

export default App;