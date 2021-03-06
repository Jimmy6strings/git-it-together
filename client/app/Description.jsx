import React from 'react';

//component for modal bio in About us button
var Description = () => (
<div className="container-fluid">
  <button type="button" className="aboutButton" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    About
  </button>

  <div className="modal fade show" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'none'}} >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Description</h5>
          <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="modal-body">

        <p> This is where we can put images and description </p>

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
</div>
  )

module.exports = Description;
