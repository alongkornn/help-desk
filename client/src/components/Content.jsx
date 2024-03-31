import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Content = () => {
  const [data, setData] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get("http://localhost:3000/ticket")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const renderTicketCountsPending = () => {
    const ticketCountsByStatus = {};

    data.forEach((ticket) => {
      const { status } = ticket;
      if (ticketCountsByStatus[status]) {
        ticketCountsByStatus[status]++;
      } else {
        ticketCountsByStatus[status] = 1;
      }
    });

    return Object.keys(ticketCountsByStatus).map((status) => (
      <div key={status}>
        {status == "pending" ? (
          <span>{ticketCountsByStatus[status]}</span>
        ) : null}
      </div>
    ));
  };

  const renderTicketCountsResolved = () => {
    const ticketCountsByStatus = {};

    data.forEach((ticket) => {
      const { status } = ticket;
      if (ticketCountsByStatus[status]) {
        ticketCountsByStatus[status]++;
      } else {
        ticketCountsByStatus[status] = 1;
      }
    });

    return Object.keys(ticketCountsByStatus).map((status) => (
      <div key={status}>
        {status == "resolved" ? (
          <span>{ticketCountsByStatus[status]}</span>
        ) : null}
      </div>
    ));
  };

  const renderTicketCountsRejected = () => {
    const ticketCountsByStatus = {};

    data.forEach((ticket) => {
      const { status } = ticket;
      if (ticketCountsByStatus[status]) {
        ticketCountsByStatus[status]++;
      } else {
        ticketCountsByStatus[status] = 1;
      }
    });

    return Object.keys(ticketCountsByStatus).map((status) => (
      <div key={status}>
        {status == "rejected" ? (
          <span>{ticketCountsByStatus[status]}</span>
        ) : null}
      </div>
    ));
  };

  const renderTicketCountsAccepted = () => {
    const ticketCountsByStatus = {};

    data.forEach((ticket) => {
      const { status } = ticket;
      if (ticketCountsByStatus[status]) {
        ticketCountsByStatus[status]++;
      } else {
        ticketCountsByStatus[status] = 1;
      }
    });

    return Object.keys(ticketCountsByStatus).map((status) => (
      <div key={status}>
        {status == "accepted" ? (
          ticketCountsByStatus[status] != 0 ? (
            <span>{ticketCountsByStatus[status]}</span>
          ) : (
            <span>0</span>
          )
        ) : null}
      </div>
    ));
  };

  const filteredData = data.filter((ticket) => {
    return ticket.status.toLowerCase().includes(searchStatus.toLowerCase());
  });

  const handleSortByStatus = () => {
    setSortBy("status");
  };

  const handleSortById = () => {
    setSortBy("id");
  };

  const sortedData =
    sortBy === "id"
      ? filteredData.sort((a, b) => a.id - b.id)
      : sortBy === "status"
      ? filteredData.sort((a, b) => a.status.localeCompare(b.status))
      : filteredData;

  const showDetail = () => {
    if (searchStatus == "") {
      return (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th>Number</th>
                        <th>Type Problem</th>
                        <th>Description</th>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Update Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data
                        ? sortedData.map((item, index) => (
                            <tr
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0
                                }
                              }}
                            >
                              <td align="center">{index + 1}</td>
                              <td align="center">{item.typeProblem}</td>
                              <td align="center">{item.description}</td>
                              <td align="center">{item.position}</td>
                              <td align="center">{item.name}</td>
                              <td>
                                {item.status == "pending" ? (
                                  <span className="badge badge-info">
                                    {item.status}
                                  </span>
                                ) : null}
                                {item.status == "resolved" ? (
                                  <span class="badge badge-warning">
                                    {item.status}
                                  </span>
                                ) : null}
                                {item.status == "accepted" ? (
                                  <span class="badge badge-success">
                                    {item.status}
                                  </span>
                                ) : null}
                                {item.status == "rejected" ? (
                                  <span class="badge badge-danger">
                                    {item.status}
                                  </span>
                                ) : null}
                              </td>
                              <td align="center">{item.updatedAt}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <Link
                  to={"/show-detail-ticket"}
                  className="btn btn-sm btn-secondary float-right"
                >
                  {" "}
                  View all Order
                </Link>
                <Link
                  to={"/form-ticket"}
                  className="btn btn-sm btn-info float-left"
                >
                  Create New Ticket
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th>Number</th>
                        <th>Type Problem</th>
                        <th>Description</th>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Update Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data
                        ? sortedData.map((item, index) => (
                            <tr
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0
                                }
                              }}
                            >
                              <td align="center">{index + 1}</td>
                              <td align="center">{item.typeProblem}</td>
                              <td align="center">{item.description}</td>
                              <td align="center">{item.position}</td>
                              <td align="center">{item.name}</td>
                              <td>
                                {item.status == "pending" ? (
                                  <span className="badge badge-info">
                                    {item.status}
                                  </span>
                                ) : null}
                                {item.status == "resolved" ? (
                                  <span class="badge badge-warning">
                                    {item.status}
                                  </span>
                                ) : null}
                                {item.status == "accepted" ? (
                                  <span class="badge badge-success">
                                    {item.status}
                                  </span>
                                ) : null}
                                {item.status == "rejected" ? (
                                  <span class="badge badge-danger">
                                    {item.status}
                                  </span>
                                ) : null}
                              </td>
                              <td align="center">{item.updatedAt}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <Link
                  to={"/show-ticket-admin"}
                  className="btn btn-sm btn-secondary float-right"
                >
                  {" "}
                  View all Order
                </Link>
                <Link
                  to={"/form-ticket"}
                  className="btn btn-sm btn-info float-left"
                >
                  Create New Ticket
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  console.log(searchStatus);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="navbar-search"
              href="#"
              role="button"
            >
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="text"
                    placeholder="Search"
                    value={searchStatus}
                    onChange={(e) => setSearchStatus(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
        </ul>
      </nav>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon bg-info elevation-1">
                  <i className="fas fa-clock" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Pending</span>
                  {renderTicketCountsPending()}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-danger elevation-1">
                  <i className="fas fa-ban" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Rejected</span>
                  {renderTicketCountsRejected()}
                </div>
              </div>
            </div>
            <div className="clearfix hidden-md-up" />
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-success elevation-1">
                  <i className="fas fa-check-double" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Accepted</span>
                  {renderTicketCountsAccepted()}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box mb-3">
                <span className="info-box-icon bg-warning elevation-1">
                  <i className="fas fa-wrench" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Resolved</span>
                  {renderTicketCountsResolved()}
                </div>
              </div>
            </div>
            <button
              onClick={handleSortByStatus}
              className="btn btn-sm btn-info float-left ml-2 mb-3"
            >
              Sort by Status
            </button>
            <button
              onClick={handleSortById}
              className="btn btn-sm btn-info float-left ml-3 mb-3"
            >
              Sort by ID
            </button>
          </div>
          {showDetail()}
        </div>
      </section>
    </div>
  );
};
