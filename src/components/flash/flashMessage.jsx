import React from 'react'
import classnames from 'classnames'
export default class FlashMessage extends React.Component {

    deleteMessage = () => {
        // console.log(this.props.message.id);
        
        this.props.deleteflashMessage(this.props.message.id) 
    }
    render() {
        const { type, text} = this.props.message
        // console.log(message);
        
        return (
        <div className={classnames('alert', {
            'alert-success': type === "success",
            'alert-danger': type === 'danger'
        })} >
            <button className="close" onClick={ this.deleteMessage }>&times;</button>
            { text }</div>
        )
    }
}