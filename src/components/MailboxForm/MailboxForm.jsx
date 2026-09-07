import { useNavigate } from 'react-router-dom';

function MailboxForm({ addBox }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      boxOwner: e.target.boxOwner.value,
      boxSize: e.target.boxSize.value
    };
    addBox(formData);
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Box Owner:
        <input type="text" name="boxOwner" />
      </label>
      <label>
        Box Size:
        <select name="boxSize">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Add Mailbox</button>
    </form>
  );
}

export default MailboxForm;