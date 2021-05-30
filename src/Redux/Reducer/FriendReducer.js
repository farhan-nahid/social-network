import allFriends from '../../fakeData/fakeData.json';

const initialState = {
    allFriend : allFriends,
    friendList:[ ],
}

 const FriendReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_FRIEND_LIST': {
            const newState ={
                ...state,
                friendList:[...state.friendList, action.payLoad]
            }
            return newState
        } 
        case 'REMOVE_FROM_READING_LIST':{
            const newState = {
                ...state,
                friendList: state.friendList.filter((friend) => friend.id!== action.payLoad)
            }
            return newState
        }
        default: {
            return  state
        }
    }
}

export default FriendReducer;