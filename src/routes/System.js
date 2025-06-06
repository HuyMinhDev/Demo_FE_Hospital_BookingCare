import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/UserManage";
import UserRedux from "../containers/System/Admin/UserRedux";
import Header from "../containers/Header/Header";
import ManageDoctor from "../containers/System/Admin/ManageDoctor";
import ManageSpecialty from "../containers/System/Specialty/ManageSpecialty";
import ManageInforSpecialty from "../containers/System/Specialty/ManageInforSpecialty";
import ManageClinic from "../containers/System/Clinic/ManageClinic";
import ManageInforClinic from "../containers/System/Clinic/ManageInforClinic";
import ManageHandbook from "../containers/System/Hanhbook/ManageHandbook";
import ManageInforHandbook from "../containers/System/Hanhbook/ManageInforHandbook";
import ManageAbout from "../containers/System/About/ManageAbout";

class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/user-manage" component={UserManage} />
              <Route path="/system/user-redux" component={UserRedux} />
              <Route path="/system/manage-doctor" component={ManageDoctor} />
              <Route
                path="/system/manage-specialty"
                component={ManageSpecialty}
              />
              <Route
                path="/system/manage-infor-specialty"
                component={ManageInforSpecialty}
              />
              <Route
                path="/system/manage-infor-clinic"
                component={ManageInforClinic}
              />
              <Route path="/system/manage-clinic" component={ManageClinic} />
              <Route
                path="/system/manage-handbook"
                component={ManageHandbook}
              />
              <Route
                path="/system/manage-infor-handbook"
                component={ManageInforHandbook}
              />
              <Route path="/system/manage-about" component={ManageAbout} />

              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
