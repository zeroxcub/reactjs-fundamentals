var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../component/Main');
var Home = require('../component/Home');
var PromptContainer = require('../container/PromptContainer')

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header="Player One" component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header="Player Two" component={PromptContainer} /> 
    </Route>
  </Router>
);

module.exports = routes;