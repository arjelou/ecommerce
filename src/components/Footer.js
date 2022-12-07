import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
        <>
        <div>
            <div className="container footer">
                <div className="d-inline-block">
                    <button className="btn btn-primary m-1">FAQs</button>
                    <button className="btn btn-primary m-1">Socials</button>
                    <button className="btn btn-primary m-1">Track my Parcel</button>
                    <button className="btn btn-primary m-1">Socials</button>           
                </div>
            </div>
            <div className="text-center">
                <span className="text-center">Copyright 2022 by ACMADE Data. All Rights Reserved.</span>
            </div>
        </div>
        </>
    );
  }
}