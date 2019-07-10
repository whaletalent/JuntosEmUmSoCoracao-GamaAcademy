import React, { Component, Fragment } from "react";
import { Column } from "rbx";
import NewsCard from "../NewsCard/NewsCard";

export default class NewsSection extends Component {
  componentDidMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thomas_mac"
    )
      .then(res => res.json())
      .then(data => {
        // Fillter the array  @grupojuntosemumsocoracao
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(item => item.categories.length > 0); // That's the main trick* !

        console.log(res);
        this.setState({ news: posts });
      });
  }
  state = {
    news: []
  };
  render() {
    return (
      <Fragment>
        <Column.Group multiline centered>
          {this.state.news.slice(1, 4).map(e => {
            return (
              <Column narrow size="one-quarter">
                <NewsCard
                  image={e.thumbnail}
                  content={e.title}
                  datetime={e.pubDate}
                  author={e.author}
                  social="@instagram"
                />
              </Column>
            );
          })}
        </Column.Group>
      </Fragment>
    );
  }
}
