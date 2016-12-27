var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../component/Main');
var Home = require('../component/Home');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);

module.exports = routes;