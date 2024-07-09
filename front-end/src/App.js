// import ChatBtn from './components/chat/chatBtn'
import EventDetailsStage from './components/form/eventDetailsStage';
import Form from './components/form/form';
import PrimarySearchAppBar from './components/navBar/nav'
import FormattedInputs from './components/item/item'
function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <EventDetailsStage/>
      <FormattedInputs/>
    </>
  );
}

export default App;