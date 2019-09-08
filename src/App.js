import React from 'react';


class App extends React.Component {
  state={
    data: null
  }

  componentDidMount() {
    fetch('https://the-bitch.herokuapp.com/aftonbladet')
      .then(response => response.json())
      .then(data => this.setState({data}))
  }

  render() {
    if (this.state.data) {
      return (
        <div className="app">
          <header>
            <div className="nes-container is-rounded with-title">
              <p className="title"><h1 className="nes-badge"><span className="is-error">Scraper</span></h1></p>
              <p>Scraping of the Aftonbladet news site is done when this page loads. Scraping request will fire once per day and else return a cached copy of the scraping result from earlier the same day.</p>
            </div>
          </header>
          <section>
            <ul className="nes-list is-circle nes-text is-primary">
              {this.state.data.map((object, index) => (
                object.title
                  ? <li key={index}><a href={object.link} target='_blank' rel='noopener noreferrer'>{object.title}</a></li>
                  : null
              ))}
            </ul>
          </section>

        </div>
      );
    } else {
      return null
    }
  }
}

export default App;
