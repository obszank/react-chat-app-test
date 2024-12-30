import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfo from "./userInfo/UserInfo"

const List = () => {
  return (
    <div className='list'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List