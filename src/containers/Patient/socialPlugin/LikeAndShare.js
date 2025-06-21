import React, { Component } from "react";
import { connect } from "react-redux";

class LikeAndShare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // SDK đã được tải trong index.html, nên chúng ta không cần initFacebookSDK ở đây.
  // Chúng ta chỉ cần đảm bảo Facebook parse lại component khi URL thay đổi.

  componentDidMount() {
    // Đảm bảo SDK đã tải xong trước khi cố gắng parse
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }

  componentDidUpdate(prevProps) {
    // Nếu URL (dataHref) thay đổi, bảo Facebook quét lại trang để tìm plugin mới.
    if (this.props.dataHref !== prevProps.dataHref) {
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    }
  }

  render() {
    const { dataHref } = this.props;
    return (
      <>
        {/* Dùng key={dataHref} là một thói quen rất tốt! Nó buộc React render lại. */}
        <div
          key={dataHref}
          className="fb-like"
          data-href={dataHref}
          data-width=""
          data-layout="standard"
          data-action="like"
          data-size="small"
          data-share="true"
        ></div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

export default connect(mapStateToProps, null)(LikeAndShare);
