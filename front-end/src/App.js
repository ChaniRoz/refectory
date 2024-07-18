import ChatBtn from './components/chat/chatBtn'
import EventDetailsStage from './components/form/eventDetailsStage';
import Form from './components/form/form';
import PrimarySearchAppBar from './components/navBar/nav'

import FormattedInputs from './components/item/item'
import AdminChat from './components/chat/managerChat'
// import UserPage from './components/sighnIn/userDetiles'
function App() {
  return (
    <>
    {/* <UserPage/> */}
    <AdminChat/>
      <PrimarySearchAppBar />
      {/* <MenuDetailsStage /> */}
      <EventDetailsStage/>
      <FormattedInputs/>
      <ChatBtn/>
    </>
  );
}

export default App;