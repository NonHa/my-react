import React from 'react'
import SignupForm from './signupForm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as signupAcrions from '../../actions/signupActions'
import * as flashMessage from '../../actions/flashActions'
class SignupPage extends React.Component {
    render() {
        return (
          <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupForm signupAcrions={ this.props.signupAcrions } flashMessage= { this.props.flashMessage }/>
                </div>
                <div className="col-md-3"></div>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupAcrions: bindActionCreators(signupAcrions, dispatch),
        flashMessage: bindActionCreators(flashMessage, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(SignupPage)