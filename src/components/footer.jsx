import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="uk-text-center uk-text-meta">
        <span>TacZero · Page template by </span>
        <a
          href="https://github.com/omron-sinicx/projectpage-template"
          target="_blank"
          rel="noreferrer"
        >
          <span>OMRON SINIC X</span>
        </a>
      </div>
    );
  }
}
