import React, {Component} from 'react';

class LatestProjects extends Component {
  render() {
    return (
      <div className="container-wrap">
        <section id="projects-sec" className="container">
          <header className="sec-header">
            <h1>
              <a href="portfolio.html">Latest Projects...</a>
            </h1>
          </header>
          <div className="sec-body"></div>
          <footer className="sec-footer">
            <a href="portfolio.html">More Projects</a>
          </footer>
        </section>
      </div>
    )
  }
}

export default LatestProjects;
