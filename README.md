# Frontend Mentor - Blogr landing page 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- 
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<img src= "https://i.imgur.com/KyawKwK.png"  />

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Began to plan components starting with the Navbar and working down, while doing bits of CSS along the way. Left the routing till last but gto stuck on a problem, so that needs to be completed in future.

### Built with

- HTML
- CSS
- React

### What I learned

What I learned is that I need to practice my CSS, sizing of thge images became frustrating at times, but I did enjoy the react, felt more comfortable. Had a problem when routing the landing page to a contact page, I feel I have missed soemthing little.

Code from App.js:

```function App() {
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
```

### Continued development

I would like to improve my React skills as I really enjoy using it, but for future projects when I have more time, I will share code when I get stuck, wasted time on this project when stuck at a problem.


## Author

- Website - [Harry Warwick (harrywarwick.com)
