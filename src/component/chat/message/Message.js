import './Message.css'

function Message({own}) {
  return (
    <div className={own ? "message own": "message"}>
        <div className="messageTop">
          <img className="message" src="" alt="" />
          <p className="messageText"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="messageBottom">1 hour ago</div>
    </div>
  )
}

export default Message