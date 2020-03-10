import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <footer id="footer" className="page-footer black wrapper">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text" id="brand">Yo Yo Pizza</h5>
              <p className="grey-text text-lighten-4">Delicious pizzas for everyone</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright YYP
            <h6 className="white-text" style={{textAlign: "right"}}>Our Creators</h6>
            <a className="grey-text text-lighten-4 right cr" href="https://github.com/rehasantiago">Reha</a>
          </div>
        </div>
      </footer>

    )
}

export default Footer
