import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

export const ShowTicketAdmin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // code
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
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-0"></div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
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
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data
                          ? data.map((item, index) => (
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
                                <td align="center">
                                  <Link to={"/edit-ticket/" + item._id}>
                                    <EditIcon color="primary" />
                                  </Link>
                                </td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
