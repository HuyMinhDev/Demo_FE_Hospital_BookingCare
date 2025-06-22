import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import "./DetailDoctor.scss";
import { getDetailInforDoctor } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
import DoctorSchedule from "./DoctorSchedule";
import DoctorExtraInfor from "./DoctorExtraInfor";
import LikeAndShare from "../socialPlugin/LikeAndShare";
import Comment from "../socialPlugin/Comment";
import LoadingOverlay from "react-loading-overlay";
import HomeFooter from "../../HomePage/HomeFooter";
import { Helmet } from "react-helmet";
class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: {},
      currentDoctorId: -1,
      isShowLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({ isShowLoading: true });
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      console.log(">>>Check params id: ", id);
      this.setState({
        currentDoctorId: id,
      });

      let res = await getDetailInforDoctor(id);
      if (res && res.errCode === 0) {
        this.setState({
          detailDoctor: res.data,
          isShowLoading: false,
        });
      } else {
        console.error("Failed to fetch doctor detail", res);
        this.setState({ isShowLoading: false });
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    let { language } = this.props;
    let { detailDoctor } = this.state;
    let nameVi = "";
    let nameEn = "";

    if (detailDoctor && detailDoctor.positionData) {
      nameVi = `${detailDoctor.positionData.valueVi}, ${detailDoctor.lastName} ${detailDoctor.firstName}`;
      nameEn = `${detailDoctor.positionData.valueEn}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
    }

    // let currentURL = `${window.location.origin}/detail-doctor/${this.state.currentDoctorId}`;
    let currentURL = `${
      process.env.REACT_APP_FACEBOOK_APP_ID === "1"
        ? "https://demo-fe-hospital-booking-care.vercel.app/home"
        : window.location.origin
    }/detail-doctor/${this.state.currentDoctorId}`;
    <Helmet>
      <meta
        property="og:url"
        content={`https://demo-fe-hospital-booking-care.vercel.app/detail-doctor/${this.state.currentDoctorId}`}
      />
    </Helmet>;

    return (
      <LoadingOverlay
        active={this.state.isShowLoading}
        spinner
        text="Loading..."
      >
        <HomeHeader isShowBanner={false} />

        <div className="doctor-detail-container container">
          <div className="intro-doctor">
            <div
              className="content-left"
              style={{
                backgroundImage: `url(${
                  detailDoctor && detailDoctor.image ? detailDoctor.image : ""
                })`,
              }}
            ></div>

            <div className="content-right">
              <div className="up">
                {language === LANGUAGES.VI ? nameVi : nameEn}
              </div>
              <div className="down">
                {detailDoctor &&
                  detailDoctor.Markdown &&
                  detailDoctor.Markdown.description && (
                    <span>{detailDoctor.Markdown.description}</span>
                  )}
                <div className="like-share-plugin">
                  <LikeAndShare dataHref={currentURL} />
                </div>
              </div>
            </div>
          </div>

          <div className="schedule-doctor">
            <div className="content-left">
              <DoctorSchedule doctorIdFromParent={this.state.currentDoctorId} />
            </div>
            <div className="content-right">
              <DoctorExtraInfor
                doctorIdFromParent={this.state.currentDoctorId}
              />
            </div>
          </div>

          <div className="detail-infor-doctor">
            {detailDoctor &&
              detailDoctor.Markdown &&
              detailDoctor.Markdown.contentHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: detailDoctor.Markdown.contentHTML,
                  }}
                ></div>
              )}
          </div>

          <div className="comment-doctor">
            <Comment numPost={5} dataHref={currentURL} width={"100%"} />
          </div>
        </div>

        <HomeFooter />
      </LoadingOverlay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
