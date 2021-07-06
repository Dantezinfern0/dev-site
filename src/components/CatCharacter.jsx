import React, { Component } from 'react'

class CatCharacter extends Component {
  render() {
    return (
      <li>
        <div className="outer-image">
          <img alt="various types of octopus-cats" className="image-area" src={this.props.src} />
          <section className="caption">
            <p>{this.props.number}</p>
            <div className="name-pic">
              <p>
                 <em>{this.props.names}</em> by
              </p>
              <a href={this.props.contributor.link}>
              <img alt={`Author ${this.props.names}'s custom logo`} src={this.props.contributor.image} />
              </a>
            </div>
          </section>
        </div>
      </li>
    )
  }
}
export default CatCharacter