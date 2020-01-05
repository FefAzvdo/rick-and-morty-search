import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const Footer = (props) => <p>Você tem {props.count} {props.count === 1 ? "personagem" : "personagens"} salvos</p>

Footer.propTypes = {
  count: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  count: state.characters.data.length
})

export default connect(mapStateToProps)(Footer)