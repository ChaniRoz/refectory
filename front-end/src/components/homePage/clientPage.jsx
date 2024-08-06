import Form from '../form/form';
import PrimarySearchAppBar from "../navBar/nav";
import ChatBtn from '../chat/chatBtn'
import AdminChat from '../chat/managerChat';

function ClientPage() {
  return (
    <>
      <PrimarySearchAppBar />
      <Form />
      <ChatBtn />
      {/* רק בינתיים */}
      <AdminChat />
    </>
  );
}

export default ClientPage;