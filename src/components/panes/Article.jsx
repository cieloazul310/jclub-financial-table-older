import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { md: null };
  }

  componentDidMount() {
    fetch(this.props.md)
      .then(res => res.text())
      .then(txt => {
        this.setState({
          md: txt
        });
      });
  }

  render() {
    return this.state.md !== null ? (
      <div className="article">
        <Markdown>{this.state.md}</Markdown>
      </div>
    ) : null;
  }
}

export default Article;
