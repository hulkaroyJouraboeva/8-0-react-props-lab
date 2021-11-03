const DonationForm = (props) => {
  return (
    <section class="donation">
      <h3>You could be donation <span class="secondary">#{props.ordered}!</span></h3>
      <form>
        <label>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name..." />
        <label>Caption</label>
          <input
            id="caption"
            name="caption"
            type="text"
            placeholder="Add a brief message..." />
        <label for="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            placeholder="0" /><button>Donate!</button>
      </form>
    </section>
  );
};

export default DonationForm;
