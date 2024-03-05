import React from 'react';
import PropTypes from 'prop-types';

import Project from './Projects/Project';

const Projects = ({ data }) => (
  <div className="projects">
    <div className="link-to" id="projects" />
    <div className="title">
      <h3>Projects</h3>
    </div>
    {data.map((job) => (
      <Project
        data={job}
        key={`${job.name}-${job.position}`}
      />
    ))}
  </div>
);

Projects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    position: PropTypes.string,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
    type: PropTypes.string,
  })),
};

Projects.defaultProps = {
  data: [],
};

export default Projects;
