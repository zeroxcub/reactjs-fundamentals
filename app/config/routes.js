var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;

var Main = require('../component/Main');
var Home = require('../component/Home');

var routes = (
  <Router>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}/>
    </Route>
  </Router>
)

module.exports = routes;