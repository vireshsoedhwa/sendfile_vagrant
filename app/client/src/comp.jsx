import React, { Component } from "react";

import axios from 'axios';
import './comp.css';


export default class Comp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event){
        this.setState({
            selectedFile: event.target.files[0]
          })    
    }

    onClickHandler(ev) {

        const data = new FormData();
        data.append('file', this.state.selectedFile);

        console.log(this.state.selectedFile)


        axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })

        // fetch('http://localhost:8000/upload', {
        //   method: 'POST',
        //   body: data,
        // }).then((response) => {
        //   response.json().then((body) => {
        //     this.setState({ imageURL: `http://localhost:8000/${body.file}` });
        //   });
        // });

    }


    render() {
        return (
            <div
                className="dropzone">
                <form>
                    <div>
                        <input type="file" onChange={this.onChangeHandler} />
                    </div>
                </form>
                <button
                    onClick={this.onClickHandler}
                >
                    send
                </button>
            </div>
        );
    }
}