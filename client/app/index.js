import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import AuthService from '../config/AuthService';
import services from '../config/services.js';
import repoService from '../config/services';

console.log('service', repoService);
//rendering app.jsx, authO, and repod onto index.html


//instantiate new authentication service
const auth = new AuthService('X5MiErhjYO21MdTVoiLZccQA123jBgla', 'sdm.auth0.com');
console.log(auth);
const repod = new repoService();
console.log(repod);
//render app.jsx, authentication, and repod
ReactDOM.render(
    <App auth={auth} repod={repod}/>, document.getElementById('app')
  );
