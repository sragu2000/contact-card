function Header() {
    return (
      <div className="form-control form-control-lg bg-dark text-white">
        <h2 align="center">Contact Details</h2>
        <hr></hr>
        <div className="row" align="center">
          <div className="col-md-3"><a className="m-1 btn btn-info form-control" href="/">Home Page</a></div>
          <div className="col-md-3"><a className="m-1 btn btn-info form-control" href="/fromarray">From Array</a></div>
          <div className="col-md-3"><a className="m-1 btn btn-info form-control" href="/fromarray-foreach">From Array using Map</a></div>
          <div className="col-md-3"><a className="m-1 btn btn-info form-control" href="/jsondata">From JSON Fetch</a></div>
        </div>
      </div>
    );
  }
export default Header;