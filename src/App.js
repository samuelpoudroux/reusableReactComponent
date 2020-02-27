import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './stories/1-NavBar.stories';
import { Layout} from 'antd';
import { Router, Route } from 'react-router-dom';
import history from './history';
import routes from './routes';
import menuStyle from './styles/menuStyle';
import menuItems from './menuJson/menuJson.json';
const { Header, Content, Footer } = Layout;


const App = () => (
  <Layout>
    <NavBar menuItems={menuItems} history={history} menuStyle={menuStyle} />
    <Layout>
      {/* <Header style={{ background: '#fff', padding: 0 }}>
        toto
      </Header> */}
      <Content style={{ margin: '24px 16px 0' }}>
        <Router history={history} style={{ background: 'red' }}>
          {routes.map(route => <Route path={route.path} component={route.component} />)}
        </Router>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  </Layout>

);



export default App;
