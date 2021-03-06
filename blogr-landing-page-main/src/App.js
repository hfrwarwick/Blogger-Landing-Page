import React from "react";
import { BrowserRouter, Switch, Route }  from 'react-router-dom';
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Middle from "./components/Middle/Middle";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import "./app.css";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path="/">
        <Header />
        </Route>
        <Route exact path="/contact">
          <Contact />
          </Route>
      </Switch>
      <Info
        title="Designed for the future"
        subtitle1="Introducing an extensible editor"
        para1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
        subtitle2="Robust content management"
        para2="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
        img="editor"
      />
      <Middle />
      <Info
        subtitle1="Free, open, simple"
        para1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        subtitle2="Powerful tooling"
        para2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
        img="laptop"
      />
      <Footer />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App


