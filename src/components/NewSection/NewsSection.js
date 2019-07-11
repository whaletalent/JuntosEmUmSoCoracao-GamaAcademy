import React, { Component, Fragment } from "react";
import { Column } from "rbx";
import NewsCard from "../NewsCard/NewsCard";

export default class NewsSection extends Component {
  componentDidMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@grupojuntosemumsocoracao"
    )
      .then(res => res.json())
      .then(data => {
        //  @grupojuntosemumsocoracao
        const res = data.items;
        const posts = res.filter(item => item.categories.length > 0 || res);

        this.setState({ news: posts });
      });
  }
  state = {
    news: []
  };
  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Column.Group multiline centered>
          {this.state.news.slice(0, 3).map(e => {
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
