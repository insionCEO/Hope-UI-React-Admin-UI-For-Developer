import React from "react";
import { Row, Col, Image, Table } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

//progressbar
import Progress from "../../../components/progress.js";

// img
import shap1 from "../../../assets/images/shapes/01.png";
import shap2 from "../../../assets/images/shapes/02.png";
import shap3 from "../../../assets/images/shapes/03.png";
import shap4 from "../../../assets/images/shapes/04.png";
import shap5 from "../../../assets/images/shapes/05.png";
import shap6 from "../../../assets/images/shapes/06.png";

const BootstrapTable = () => {
  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Basic Table</h4>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive mt-4">
                <Table striped id="basic-table" className=" mb-0" role="grid">
                  <thead>
                    <tr>
                      <th>Companies</th>
                      <th>Members</th>
                      <th>Budget</th>
                      <th>Status</th>
                      <th>Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Image
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap1}
                            alt="profile"
                          />
                          <h6>Soft UI XD Version</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              SP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              PP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              MM
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>$14000</td>
                      <td>
                        <div className="text-info">Pending</div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>60%</h6>
                        </div>
                        <Progress
                          softcolors="info"
                          color="info"
                          className="shadow-none w-100 "
                          value={60}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap2}
                            alt="profile"
                          />
                          <h6>Add Progress Track</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              SP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              PP
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>$3000</td>
                      <td>
                        <div className="text-danger">Pending</div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>10%</h6>
                        </div>
                        <Progress
                          softcolors="danger"
                          color="danger"
                          className="shadow-none w-100"
                          value={10}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap3}
                            alt="profile"
                          />
                          <h6>Fix Platform Errors</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              SP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              PP
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>Not set</td>
                      <td>
                        <div className="text-success">Completed</div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>100%</h6>
                        </div>
                        <Progress
                          softcolors="success"
                          color="success"
                          className="shadow-none w-100"
                          value={10}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap4}
                            alt="profile"
                          />
                          <h6>Launch Our Mobile App</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              SP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              PP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              AP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              DP
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>$20500</td>
                      <td>
                        <div className="text-success">Completed</div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>100%</h6>
                        </div>
                        <Progress
                          softcolors="success"
                          color="success"
                          className="shadow-none w-100"
                          value={100}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap5}
                            alt="profile"
                          />
                          <h6>Add the New Pricing Page</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              SP
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>$500</td>
                      <td>
                        <div className="text-primary">On Schedule</div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>25%</h6>
                        </div>
                        <Progress
                          softcolors="primary"
                          color="primary"
                          className="shadow-none w-100"
                          value={25}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap6}
                            alt="profile"
                          />
                          <h6>Redesign New Online Shop</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              SP
                            </div>
                          </Link>
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              PP
                            </div>
                          </Link>
                        </div>
                      </td>
                      <td>$2000</td>
                      <td>
                        <div className="text-warning">Completed</div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>40%</h6>
                        </div>
                        <Progress
                          softcolors="warning"
                          color="warning"
                          className="shadow-none w-100"
                          value={40}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BootstrapTable;
