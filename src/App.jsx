import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home"
import Service from "./Service"
import About from "./About"
import Contact from "./Contact"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Switch, Route, Redirect } from "react-router-dom"
import Search from "./Search"
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={() => <About name="Bhavya" />} />
        <Route exact path="/service" render={() => <Service name="Bhavya" />} />
        <Route exact path="/contact/:name" component={Contact} />
        <Route exact path="/Search" component={Search} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  )
}

export default App
