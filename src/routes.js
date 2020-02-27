import React from 'react';

const Home = () => <h1>home</h1>
const User = () => <h1>user</h1>

const routes = [
    {
      key:"home",
      path:'/home', 
      component: Home
    }, 
    {
      key:"user",
      path:'/user', 
      component: User
    }, 
  ] 

  export default routes