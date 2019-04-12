import React, {Component, Fragment} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Dropzone from 'react-dropzone'

class GameMarketPage extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      inputs: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onPreviewDrop = (files) => {
    console.log(files);
    this.setState({
      files: this.state.files.concat(files),
     });
  }


  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    if (this.state.files.length === 0) 
      return alert("no files found");
    
    fetch('/api/game/new', {
      method: 'POST',
      body: data,
    });
    this.setState({
      files: []
    });
    event.target.elements.location.value = "";
    event.target.elements.desc.value = "";
    console.log(event.target.elements);
    event.target.elements.finance.value = "";
  }


  render () {
    return (
    <div className=" upload-image row">
      {/* <div className="col-2 sidebar-game">
        <img src="/assets/sidebar.jpeg" alt="sidebar"/>
      </div> */}
      <div className="row col-12">
          <div className="market-header col-12">
            <h3>פרסם לקהל היעד שלך</h3>
          </div>
          <hr />
        
          <form className="row col-12 main-form" onSubmit={this.handleSubmit}>
            <div className="form-group form-group-sm col-sm-8">
              <div className="row">
                <label forhtml="dragzone" className="col-sm-4 col-form-label">קובץ:</label>
                <Dropzone onDrop={acceptedFiles => this.onPreviewDrop(acceptedFiles)}>
                  {({getRootProps, getInputProps}) => (
                      <div {...getRootProps()} id="dragzone" className="col-sm-8 dropzone-wrapper">
                        <input name="file" {...getInputProps()} />
                        {this.state.files.length > 0 ? (
                          <Fragment>
                          {this.state.files.map((file) => (
                            <img
                            alt="Preview"
                            key={file.name}
                            src={file.preview}
                            />
                            ))}
                        </Fragment>) : <p>Drag 'n' drop some files here</p>}
                      </div>
                  )}
                </Dropzone>
              </div>
            </div>
            <div className="form-group form-group-sm col-sm-8">
              <div className="row">
                <label forhtml="desc" className="col-sm-4 col-form-label">תיאור:</label>
                <div className="col-sm-8">
                  <textarea name="desc" className="form-control desc-textarea" rows="2" id="desc"></textarea>
                </div>
              </div>
            </div>
            <div className="form-group form-group-sm col-sm-8">
              <div className="row">
                <label forhtml="checkboxes" className="col-sm-4 col-form-label">קהל יעד:</label>
                <div className="col-sm-8" id="checkboxes">
                  <div className="form-check form-check-inline">
                    <input name="ageRange" type="checkbox" className="form-check-input" />
                    <label className="form-check-label" >ילדים</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input name="ageRange" type="checkbox" className="form-check-input" />
                    <label className="form-check-label">חיילים</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input name="ageRange" type="checkbox" className="form-check-input" />
                    <label className="form-check-label">סטודנטים</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input name="ageRange" type="checkbox" className="form-check-input" />
                    <label className="form-check-label">מבוגרים</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input name="ageRange" type="checkbox" className="form-check-input" />
                    <label className="form-check-label">גיל הזהב</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group form-group-sm col-sm-8">
              <div className="row">
                <label forhtml="location" className="col-sm-4 col-form-label">מיקום:</label>
                <div className="col-sm-8">
                  <select name="location" className="custom-select">
                    <option defaultValue="0">בחר מיקום</option>
                    <option value="1">צפון</option>
                    <option value="2">דרום</option>
                    <option value="3">גוש דן</option>
                    <option value="3">השרון</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group form-group-sm col-sm-8">
              <div className="row">
                <label forhtml="finance" className="col-sm-4 col-form-label">תקציב חודשי:</label>
                <div className="col-sm-8">
                  <input name="finance" className="form-control" id="finance"/>
                </div>
              </div>
            </div>
            
            <div className="btn-upload col-12">
            <button className="btn btn-secondary btn-orange btn-reset" type="submit">פרסם</button>
            </div>
          </form>
      </div>
    </div>);
  }
}

export default GameMarketPage;