import React, {Component} from 'react';
import ReactDOM from 'react-dom';

 export const metaInfoDisplay = ({createdBy, creationTime, modifiedBy, lastModificationTime}) => {
  
            return (

                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label  className="col-form-label">Created By</label>
                        <input
                            type="text"
                            className="form-control input-sm"
                            
                            disabled="true"
                            placeholder={createdBy}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label  className="col-form-label">Enrollment Date</label>
                        <input
                            type="text"
                            className="form-control input-sm"
                            
                            disabled="true"
                            placeholder={creationTime}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label  className="col-form-label">Modified By</label>
                        <input
                            type="text"
                            className="form-control input-sm"
                            id="inputPassword4"
                            disabled="true"
                            placeholder={modifiedBy}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label  className="col-form-label">Last Modified</label>
                        <input
                            type="text"
                            className="form-control input-sm"
                            id="inputPassword4"
                            disabled="true"
                            placeholder={lastModificationTime}/>
                    </div>
                </div>

            );
        }


export default metaInfoDisplay;