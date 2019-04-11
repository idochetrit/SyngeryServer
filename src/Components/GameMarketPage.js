import React, {Component, Fragment} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Dropzone from 'react-dropzone'

class GameMarketPage extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      files: [],
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
    
    fetch('/api/game/new', {
      method: 'POST',
      body: data,
    });
  }


  render () {
    return (
    <div className="container card upload-image">
      <div className="row">
        <div className="col-lg-12 text-center" style={{"paddingBottom": '30px'}}>
          <h3 className="mt-5">פרסם לקהל היעד שלך</h3>
          <hr />
          <form>
            <div className="form-group">
              <Dropzone onDrop={acceptedFiles => this.onPreviewDrop(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                  <section>
                    <div {...getRootProps()} className="dropzone-wrapper">
                      <input {...getInputProps()} />
                      <p>Drag 'n' drop some files here</p>
                    </div>
                  </section>
                )}
              </Dropzone>
              {this.state.files.length > 0 &&
              <Fragment>
                <h3>Previews</h3>
                {this.state.files.map((file) => (
                  <img
                  alt="Preview"
                  key={file.name}
                  src={file.preview}
                  />
                  ))}
              </Fragment>
            }
            </div>
              
            <div className="form-group">
              <label forhtml="desc">תיאור:</label>
              <textarea className="form-control desc-textarea" rows="4" id="desc"></textarea>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" id="ageRanges1" />
              <label className="form-check-label" forhtml="ageRanges1">ילדים</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" id="ageRanges2" />
              <label className="form-check-label" forhtml="ageRanges2">חיילים</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" id="ageRanges2" />
              <label className="form-check-label" forhtml="ageRanges2">סטודנטים</label>
            </div>
            <div className="btn-upload col-12 ">
              <button className="btn btn-warning btn-reset" type="button">פרסם</button>
            </div>
          </form>
        </div>
      </div>
    </div>);
  }
}

export default GameMarketPage;