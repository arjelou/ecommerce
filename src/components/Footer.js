import React from "react";

export default class Footer extends React.Component {
  render() {
   
    return (
        <>
            <div className="container mb-2footer">
                <div className="row justify-content-md-between mt-3">
                    <div className="col">
                        <h2>ACMADE</h2>
                    </div>
                    <div className="col">
                        
                            <div className="list-category">
                               <ul>
                                <h5>Category</h5>
                                <li><a href=".">Dress</a></li>
                                <li><a href=".">Knitwear</a></li>
                                <li> <a href=".">Crop Tops</a></li>
                                <li> <a href=".">Pantsuit divlection</a></li> 
                                <li> <a href=".">Sharp Sweet Menswear</a></li> 
                                <li> <a href=".">Adventures Accessories</a></li> 
                               </ul>
                            </div>
                    </div>
                    <div className="col">
                        <h6>Social</h6>
                        <ul>
                            <li><a href=".">Facebook</a></li>
                            <li><a href=".">Instagram</a></li>
                            <li> <a href=".">YouTube</a></li> 
                        </ul>
                    </div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col text-center mt-3 mb-3">
                     <span className="text-center">Copyright 2022 by ACMADE Data. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
  }
}