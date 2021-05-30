export const AddToFriendList = (payLoad) =>{
    return{
     type:'ADD_TO_FRIEND_LIST',
     payLoad,
    }
 }
 
 export const RemoveFromFriendList = (payLoad) =>{
     return{
         type:'REMOVE_FROM_READING_LIST',
         payLoad,
     }
 }