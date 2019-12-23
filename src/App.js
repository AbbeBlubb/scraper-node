import React from 'react';
import { IsFetching } from './isFetching'


class App extends React.Component {
  state={
    data: null // To test the ternary for broken queryselector: [{ headers: [] }] 
  }

  componentDidMount() {
    //fetch('http://localhost:4000/aftonbladet')
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

              <h1 className="title">
                <span className="nes-badge">
                  <span className="is-error">
                    Scraper
                  </span>
                </span>
              </h1>

              <p>Scraping of the Aftonbladet news site is done when this page loads. Scraping request will fire once per day and else return a cached copy of the scraping result from earlier the same day.</p>
              <p>Latest scraped: {this.state.data[0].date} (+2 hrs summer or +1 hr winter)</p>
            </div>
          </header>

          {this.state.data[0].headers.length === 0
            ? (
                <section>
                  <p>
                    {`The Aftonbladet news site was scraped, but the scraping returned no headers.
                    The scraper needs a new DOM selector structure and it seems I haven't noticed this!`}
                  </p>
                </section>
              )
            : (
                <section>
                  <ul className="nes-list is-circle nes-text is-primary">
                    {this.state.data[0].headers.map((object, index) => (
                      object.title
                        ? <li key={index}><a href={object.url} target='_blank' rel='noopener noreferrer'>{object.title}</a></li>
                        : null
                    ))}
                  </ul>
                </section>
              )
          }
        </div>
      );
    } else {
      return <IsFetching />
    }
  }
}

export default App;
