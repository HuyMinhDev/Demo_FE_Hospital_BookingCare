import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";

class LikeAndShare extends Component {
  componentDidMount() {
    this.parseFacebookPlugin();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.language !== prevProps.language ||
      this.props.dataHref !== prevProps.dataHref
    ) {
      this.parseFacebookPlugin();
    }
  }

  parseFacebookPlugin = () => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  };

  render() {
    const { dataHref } = this.props;
    console.log("Check dataHref new: ", dataHref);
    return (
      <div
        className="fb-like"
        data-href={dataHref}
        data-width=""
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-share="true"
        data-lazy="false"
      ></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(LikeAndShare);
