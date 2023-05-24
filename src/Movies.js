import React from "react";
import PropTypes from "prop-types";

function Movie({ id, title, year, summary, postre }) {
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  postre: PropTypes.string.isRequired,
};

export default Movie;
