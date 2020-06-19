import React from 'react'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
 class SignupFrom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            PasswordConfirmation: '',
            errors: {},
            isLoding: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state);
        this.setState({
            errors: {},
            isLoding: true
        })
        this.props.signupAcrions.userSignupRequest(this.state)
            .then(() => {
                // this.setState({isLoding: true})  
                this.props.flashMessage.addflashMessage({
                    type: 'success',
                    text: "登录成功 永远永远"
                })
                this.props.history.push('/')          
            },
                ({response}) => {
                    this.setState({ errors: response.data, isLoding:false })
                this.props.flashMessage.addflashMessage({
                    type: 'danger',
                    text: "登录失败 永远永远"
                })   
                }
                )
    }

    onChange = (e) => {
        // console.log(e.target.value);
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { errors, isLoding} = this.state 
        return (
            <form onSubmit={ this.onSubmit}>
                 <h1>Join Our Team</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className={classnames("form-control", {'is-invalid': errors.username})} id="exampleInputEmail1" placeholder="Username"
                    name="username" onChange={ this.onChange}
                    />
                    { errors.username && <span className="text">{ errors.username }</span> }
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Email</label>
                    <input type="email" className={classnames("form-control", {'is-invalid': errors.email})} id="exampleInputPassword2" placeholder="Email"
                    name="email" onChange={ this.onChange}/>
                     { errors.email && <span className="text">{ errors.email }</span> }
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail3">Password</label>
                    <input type="password" className={classnames("form-control", {'is-invalid': errors.password})} id="exampleInputEmail3" placeholder="Password"
                    name="password" onChange={ this.onChange}/>
                     { errors.password && <span className="text">{ errors.password }</span> }
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword4">PasswordConfirmation</label>
                    <input type="password" className={classnames("form-control", {'is-invalid': errors.PasswordConfirmation})} id="exampleInputPassword4" placeholder="PasswordConfirmation"
                    name="PasswordConfirmation" onChange={ this.onChange}/>
                     { errors.PasswordConfirmation && <span className="text">{ errors.PasswordConfirmation }</span> }
                </div>
                <button disabled={ isLoding } type="submit" className="btn btn-primary">注册</button>
            </form>
        )
    }
}

export default withRouter(SignupFrom)