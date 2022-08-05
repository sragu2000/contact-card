function ContactCard(props) {
    return (
      <div className="card border-dark " style={{margin:'1%'}}>
        <div className="card-header bg-success text-white" align="center">{props.name}</div>
        <div className="card-body">
            <label>E-Mail:&nbsp;</label>
            <input type="text" disabled value={props.email} className="form-control"></input><p></p>
            <label>Phone:&nbsp;</label>
            <input type="text" disabled value={props.phone} className="form-control"></input><p></p>
            <label>Website:&nbsp;</label>
            <input type="text" disabled value={props.website} className="form-control"></input><p></p>
        </div>
        <p></p>
      </div>
    );
  }
  export default ContactCard;