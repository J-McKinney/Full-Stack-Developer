import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PDF from "../../Doc/JesseMcKinney.pdf";
import kurz from "../../img/kurz.webp";

class Navbar extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      })
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
  }

  render() {
    const NavLinks = () =>
      this.props.links.map((link, index) => (
        <a className="links" key={index} href={link.to}>
          {link.name}.
        </a>
      ));

    return (
      <Transition>
        <StyledNavbar className={this.state.show ? "active" : "hidden"}>
          <a className="logo" href="/Full-Stack-Developer" alt="logo">
            <img className="logo" src={kurz} alt="Home" />
          </a>
          <nav>
            <NavLinks />
            <a className="pdf" href={PDF} target="_blank" rel="noreferrer">
              Resume.
            </a>
          </nav>
        </StyledNavbar>
      </Transition>
    );
  }
}
const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 300ms ease-out;
    transform: translate(0, -100%);
  }
`;

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: #0a192f;
  z-index: 1000;
  box-shadow: 13px 13px 18px #040d1b, -13px -13px 15px #122746, inset 13px 13px 18px #040d1b, inset -13px -13px 19px #122746;
  .links {
    margin-right: 1rem;
    font-weight: normal;
    color: #5ce9cb;
    text-decoration: none;
  }
  .pdf {
    margin-right: 1rem;
    font-weight: normal;
    color: white;
    text-decoration: none;
  }
  .brand {
    position: absolute;
    left 6rem;
    font-style: italic;
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
    text-decoration: none;
  }
  .logo {
    margin-left: 1rem;
    height: 50px;
    width: 50px;
  }
`;

export default Navbar;
