import React from 'react'
import FlashMessage from './flashMessage'
import { connect } from 'react-redux'
import  { deleteflashMessage } from '../../actions/flashActions'
class FlashMessageList extends React.Component {
    render() {
      
        const messages = this.props.messages.map(message => {
            return  <FlashMessage key={ message.id } message={ message } deleteflashMessage={ this.props.deleteflashMessage}/>
        })
        // console.log(this.props.messages);
        
        return (
            <div className="container">
               { messages }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessage
    }
}
export default connect(mapStateToProps, { deleteflashMessage })(FlashMessageList)