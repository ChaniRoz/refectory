import Form from './components/form/form';
import PrimarySearchAppBar from './components/navBar/nav'
import ChatBtn from './components/chat/chatBtn'
import AdminChat from './components/chat/managerChat'

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      {/* <StandardImageList/> */}
      <AdminChat/>
      <Form />
      <ChatBtn/>
      {/* </> */}
    </>
  );
}

export default App;