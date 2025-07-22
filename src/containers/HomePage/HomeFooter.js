import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./HomeFooter.scss";

class HomeFooter extends Component {
  render() {
    return (
      <footer className="mt-auto">
        <div className="footer-top section">
          <div className="container">
            <div className="footer-grid row">
              <div className="col-12 col-lg-4">
                <h3>About Us</h3>
                <p>
                  <FormattedMessage id="patient.footerHomePage.disHopital" />
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <h3>Latest News</h3>
                <div className="footer-link">
                  <i className="fa fa-long-arrow-alt-right" />
                  <Link to="/list-specialty">
                    <FormattedMessage id="patient.footerHomePage.specialities" />
                  </Link>
                </div>
                <div className="footer-link">
                  <i className="fa fa-long-arrow-alt-right" />
                  <Link to="/list-doctor">
                    <FormattedMessage id="patient.footerHomePage.allDoctors" />
                  </Link>
                </div>
                <div className="footer-link">
                  <i className="fa fa-long-arrow-alt-right" />
                  <Link to="/list-clinic">
                    <FormattedMessage id="patient.footerHomePage.clinics" />
                  </Link>
                </div>
                <div className="footer-link">
                  <i className="fa fa-long-arrow-alt-right" />
                  <Link to="/list-handbook">
                    <FormattedMessage id="patient.footerHomePage.handBooks" />
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <h3>Contact Info</h3>
                <div className="footer-contact">
                  <i className="fa fa-map-marker-alt" />
                  <Link to="#">
                    <FormattedMessage id="patient.footerHomePage.addressAdmin" />
                  </Link>
                </div>
                <div className="footer-contact">
                  <i className="far fa-envelope" />
                  <a href="mailto:nguyenminhhuy2410@gmail.com">
                    nguyenminhhuy2410@gmail.com
                  </a>
                </div>
                <div className="footer-contact">
                  <i className="fas fa-phone-alt" />
                  <a href="tel:0344375201">034.437.5201</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            © 2025 Instruction. All rights reserved | Design by{" "}
            <Link to="/home">MinhHuy</Link>
          </div>
        </div>
        <a
          href="https://www.messenger.com/t/61577828784367/"
          target="_blank"
          class="messenger-floating-button"
          aria-label="Chat qua Messenger"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png"
            alt="Messenger Icon"
          />
        </a>
      </footer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(HomeFooter);
