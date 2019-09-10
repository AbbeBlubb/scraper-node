import React from 'react';


class App extends React.Component {
  state={
    data: null
  }

  componentDidMount() {
    fetch('http://localhost:4000/aftonbladet')
    //fetch('https://the-bitch.herokuapp.com/aftonbladet')
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  render() {
    if (this.state.data) {
      return (
        <div className="app">
          <header>
            <div className="nes-container is-rounded with-title">
              <h1 className="title"><span className="nes-badge"><span className="is-error">Scraper</span></span></h1>
              <p>Scraping of the Aftonbladet news site is done when this page loads. Scraping request will fire once per day and else return a cached copy of the scraping result from earlier the same day.</p>
              <p>Latest scraped: {this.state.data[0].date}</p>
            </div>
          </header>
          <section>
            <ul className="nes-list is-circle nes-text is-primary">
              {this.state.data[0].headers.map((object, index) => (
                object.title
                  ? <li key={index}><a href={object.link} target='_blank' rel='noopener noreferrer'>{object.title}</a></li>
                  : null
              ))}
            </ul>
          </section>

        </div>
      );
    } else {
      return (
        <div className="app">
          <header>
            <div className="nes-container is-rounded with-title">
              <h1 className="title"><span className="nes-badge"><span className="is-error">Waiting...</span></span></h1>
              <p>Poking the API server. Might take 5 seconds to get it running.</p>
            </div>
          </header>
        </div>
      )
    }
  }
}

export default App;
