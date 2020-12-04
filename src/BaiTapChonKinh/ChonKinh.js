import React, { Component } from 'react'
import "./ChonKinh.css";
export default class ChonKinh extends Component {
    state = {
        // imgSRC: "./glassesImage/g1.jpg",
        imgSRC: "./glassesImage/v1.png"
    }
    changeClass = (newGlass) => {
        this.setState({
            // imgSRC: `./glassesImage/${newGlass}.jpg`,
            imgSRC: `./glassesImage/${newGlass}.png`
        })

    }

    render() {
        return (
            <div classname="container">
                <div className="card text-white ">
                    <img className="background card-img-top " src="./glassesImage/background.jpg" width="100" />
                    <div className="card-body class-body container-fliud">
                        <h3 className="header-text bg-dark">TRY GLASSES APP ONLINE</h3>

                        <div className="img-class">
                            <div className="row mt-40">
                                <div className="col-6 text-center">
                                    <h4 className="text-dark ">Trước</h4>
                                    <img src="./glassesImage/model.jpg" width="200" />
                                </div>
                                <div className="col-6 text-center">
                                    <h4 className="text-dark ">Sau</h4>
                                    <img src="./glassesImage/model.jpg" width="200" className="glass-deafault" />
                                    <img src={this.state.imgSRC} width="60" className="glass-choose" ></img>
                                </div>
                            </div>

                        </div>
                        <div className="card  text-dark Choose__glass">
                            <div className="card-body ">
                                {/* <h4 className="card-title text-center bg-danger">Chọn Kính</h4> */}
                                <div className="row text-center ">
                                    <div className="IMG-chosse col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => {
                                            this.changeClass("v1")
                                        }} src="./glassesImage/v1.png" width="120" ></img>
                                    </div>
                                    <div className="IMG-chosse col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => {
                                            this.changeClass("v2")
                                        }} src="./glassesImage/v2.png" width="120" ></img>
                                    </div>
                                    <div className="IMG-chosse col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => {
                                            this.changeClass("v3")
                                        }} src="./glassesImage/v3.png" width="120"></img>
                                    </div>
                                    <div className="IMG-chosse col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => {
                                            this.changeClass("v4")
                                        }} src="./glassesImage/v4.png" width="120"></img>
                                    </div>
                                    <div className="IMG-chosse col-2 ">
                                        <img style={{ cursor: "pointer" }} onClick={() => {
                                            this.changeClass("v5")
                                        }} src="./glassesImage/v5.png" width="120"></img>
                                    </div>
                                    <div className="IMG-chosse col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => {
                                            this.changeClass("v6")
                                        }} src="./glassesImage/v6.png" width="120"></img>
                                    </div>
                                    <div className="IMG-chosse col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => {
                                            this.changeClass("v7")
                                        }} src="./glassesImage/v7.png" width="120"></img>
                                    </div>
                                    <div className="IMG-chosse col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => {
                                            this.changeClass("v8")
                                        }} src="./glassesImage/v8.png" width="120"></img>
                                    </div>
                                    <div className="IMG-chosse col-2">
                                        <img style={{ cursor: "pointer" }} onClick={() => {
                                            this.changeClass("v9")
                                        }} src="./glassesImage/v9.png" width="120"></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
