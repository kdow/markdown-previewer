import React, { Component } from 'react';
import './App.css';

const marked = require("marked");
const defaultText =
`# Enter Markdown into the Editor

## View results in the live preview

You can *emphasize* different **words**

### How about a list?

- Item One
- Item Two
- Item Three

We can include \`inline code\` or code blocks:
\`\`\`
function codeSample(x, y) {
  return x + y
}\`\`\`

> We can use block quotes

And add images:

![cat with wires](https://media.kellydownes.net/img/cat-wire.jpg)

This markdown previewer was created by [Kelly Downes](https://github.com/kdow/)`;

class Previewer extends Component {
  state = {
    markdown: defaultText
  }

  updateMarkdown = function(markdown) {
    this.setState({markdown});
  }

  render () {
    const {markdown} = this.state;
    return (
      <div className = "flexbox">
        <div className = "column">
          <h2>Markdown Editor</h2>
          <textarea id="editor"
            value = {markdown}
            onChange= {(event) => this.updateMarkdown(event.target.value)}>
          </textarea>
        </div>
        <div className = "column">
          <h2>Live Preview</h2>
          <div id="preview" dangerouslySetInnerHTML = {{__html: marked(markdown),
            sanitize: true}} />
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Previewer/>
      </div>
    );
  }
}

export default App;
