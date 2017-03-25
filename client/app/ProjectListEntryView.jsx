import React from 'react';
import ProjectList from './ProjectList.jsx';

{/*render data for each project in project list. takes in project and click event for each project*/}
var ProjectListEntry = ({project, handleProjectListEntryClick}) => (
  {/*enters a project with click on project*/}
  <div className="project-list-entry" onClick={() => handleProjectListEntryClick(project)}>
    <div className="project-body">
      <div className="row">
        <div className="col-md-11">
          {/*each project info on list of projects*/}
          <div className="project-list-entry-title">{project.name}</div>
          <div className="project-list-entry-owner">{project.owner}</div>
          <div className="project-list-entry-detail">{project.description}</div>
        </div>
        <div className="col-md-1">
          <br />
          <span className="right fa fa-chevron-right"></span>
        </div>
      </div>
    </div>
  </div>
);

ProjectListEntry.propTypes = {
  project: React.PropTypes.object.isRequired
};


module.exports = ProjectListEntry;