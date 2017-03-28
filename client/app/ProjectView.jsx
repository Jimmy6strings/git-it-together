import React from 'react';
import Deliverable from './Deliverable.jsx';
import Resource from './Resource.jsx';
import ChatApp from './chatRoom.jsx';

//rendered functionality for project clicked. takes in project, profile info, and deleteProject for delete button functionality
var Project = ({project, profile, deleteProject}) => (

  /*if no project exists, render text no project found. else render project data*/
  !project ? <div className="project-view">No project found</div> :
  <div className="container-fluid">
    <div className="project-view">
      <div className="row">
        <div className="col project-details">
          {/*pass in project name and link to repo*/}
          <a className="repo-nav" target="_blank" href={'https://github.com/' + project.owner + '/' + project.name.replace(/ /g, '-').toLowerCase()}>{project.name}</a>
          {/*delete button to delete current project and go back to list*/}
          <div className="deleteBar">
          <button type="submit" className="delete" onClick={() => deleteProject(project.id)}><i className="fa fa-trash"></i></button>
          </div>
          <hr />
          <p className="repo-content">{project.description}</p>
        </div>
      </div>
    {/*deliverables section form for tasks*/}
      <div className="row deliverables-row">
        <div className="col-xs-12 col-sm-12 col-lg-6 project-view-component project-view-component-left">
          <div className="deliverables-section">
            <h2>Deliverables</h2>
            <hr />
            <Deliverable.Form projectid={project.id} user={profile.nickname} room={project.name} />
            <hr />
            <Deliverable.List project={project} />
          </div>
        </div>
        {/*resources section for links related to the project*/}
        <div className="col-xs-12 col-sm-12 col-lg-6 project-view-component project-view-component-right">
          <div className="resources-section">
            <h2>Resources</h2>
            <hr />
            <Resource.Form projectid={project.id} user={profile.nickname} room={project.name} />
            <hr />
            <Resource.List project={project} />
          </div>
        </div>
      </div>
      {/*chat room section for each member attached to project*/}
      <div className="row chat-row">
        <div className="col-xs-12 col-sm-12 col-lg-6 project-view-component project-view-component-left">
          {/*video chat rendering for each user attached to project*/}
          <div className="video-chat-section">
            <iframe src={"https://appear.in/git-it-together/" + project.name} width="100%" height="640" frameBorder="0"></iframe>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-6 project-view-component project-view-component-right">
          <div className="chat-section">
            <ChatApp user={profile.nickname} room={project.name} />
          </div>
        </div>

      </div>
    </div>
  </div>
);

Project.propTypes = {
  project: React.PropTypes.object.isRequired
};

module.exports = Project;
