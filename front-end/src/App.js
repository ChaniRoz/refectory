import ChatBtn from './components/chat/chatBtn'
import Form from './components/form/form';
import PrimarySearchAppBar from './components/navBar/nav'
import FormattedInputs from "./components/item/item";

function App() {
  return (
    <>
      <FormattedInputs/>
      <ChatBtn/>
      <PrimarySearchAppBar />
      <Form />
    </>
  );
}

export default App;