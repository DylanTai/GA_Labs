import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <main>
      <h1>Mailbox List</h1>
      <div>
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mail-box">Mailbox {mailbox._id}</div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default MailboxList;