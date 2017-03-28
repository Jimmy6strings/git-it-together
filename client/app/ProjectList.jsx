import React from 'react';
import ProjectListEntry from './ProjectListEntryView.jsx';

//list of projects. Takes in projects as and argument and click event on list
var ProjectList = ({projects, handleProjectListEntryClick}) => (
  <div>
    {/*iterate over the list of projects*/}
    {projects.map((project) =>
      /*render each project by connecting id, project, and click entry*/
      <ProjectListEntry
        key = {project.id}
        project = {project}
      handleProjectListEntryClick={handleProjectListEntryClick} />
    )}

  </div>
);

ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired
};

module.exports = ProjectList;
