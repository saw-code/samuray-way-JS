import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {dispatch(addMessageAC())},
    messageChange: (text) => {dispatch(updateNewMessageAC(text))}
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

// connect создает контейнерную компоненту, внутри она рендерит
// презентационную компонетнту Dialogs и внутрь Dialogs в качестве
// пропсов передает то, что сидит внутри объектов (mapStateToProps и mapDispatchToProps)
// во вторую функцию он засунет что то вроде store.dispatch.bind(store)
// в общем dispatch засунет

// Как было до этого:
// export const DialogsContainer = () => {
//   const store = useContext(StoreContext)
//
//   let dialogsPageState = store.getState().dialogsPage
//
//   let addMessage = () => {
//     store.dispatch(addMessageAC())
//   }
//
//   let messageChange = (text) => {
//     store.dispatch(updateNewMessageAC(text))
//   }
//
//   return <Dialogs
//     messageChange={messageChange}
//     addMessage={addMessage}
//     dialogsPage={dialogsPageState}
//   />
// };