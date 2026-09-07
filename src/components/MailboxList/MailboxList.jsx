import { Link } from 'react-router-dom';

function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailbox List</h2>
      <div className="mailbox-list">
        {mailboxes.map((mailbox) => (
          <Link 
            to={`/mailboxes/${mailbox._id}`} 
            key={mailbox._id}
            className="mailbox-item"
          >
            Mailbox {mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MailboxList;