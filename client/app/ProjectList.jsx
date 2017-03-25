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

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
module.exports = ProjectList;
