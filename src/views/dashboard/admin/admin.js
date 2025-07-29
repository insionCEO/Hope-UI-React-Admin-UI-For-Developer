
import React, { useState } from 'react'
import { Row, Col, Modal, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../../components/Card'
const Admin = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    // const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);

    let history = useNavigate()


    //check
    //     const [status , setStatus] =useState([{
    //         check: <input className="form-check-input" type="checkbox"/>,
    //     },
    //     {
    //         check: <input className="form-check-input" type="checkbox"/>,
    //     },
    //     {
    //         check: <input className="form-check-input" type="checkbox"/>,
    //     }

    // ])

    //permission
    const [permission, setPermission] = useState([{
        name: 'Role',
        status: false

    },
    {
        name: 'Role Add',
        status: true
    },
    {
        name: 'Role List',

    },
    {
        name: 'Permission',

    },
    {
        name: 'Permission Add',

    },
    {
        name: 'Permission List',

    }
    ])
    const [name, setName] = useState('')
    const [editname, setEditname] = useState('')
    const [permissionupdateid, setUpdate] = useState('')
    function permissionpush() {

        setPermission([...permission, { name: name }])
        permission.push({
            name: name
        })
    }

    function permissiondeleted(index) {
        permission.splice(index, 1)
    }
    function permissionedit(permissionname, openmodal, permissionid) {

        setShow2(openmodal);
        setEditname(permissionname);
        setUpdate(permissionid);
    }
    function permissionupdate() {
        permission[permissionupdateid].name = name;
    }
    // useEffect(
    //     () => {
    //         return permission;
    //     }, [permission, name]
    // )


    //role
    const [role, setRole] = useState([
        {
            name: 'Admin',
            status: true
        },
        {
            name: 'DEMO ADMIN',
            status: true
        },
        {
            name: 'USER',
            status: false
        }
    ])
    const [name1, setName1] = useState('')
    const [roleeditname, setRolename] = useState('')
    const [roleupdateid, setUpdate1] = useState('')

    function rolepush() {
        setRole([...role, { name: name1 }])
        role.push({
            name: name1
        })
    }

    function roledeleted(index) {
        role.splice(index, 1)
    }
    function roleedit(rolename, openmodal, roleid) {
        setShow3(openmodal);
        setRolename(rolename);
        setUpdate1(roleid);
    }
    function roleupdate() {
        role[roleupdateid].name = name1;
    }
    // useEffect(
    //     () => {
    //         return role;
    //     }, [role, name1]
    // )
    return (
        <>
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Header className="d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className="card-title mb-0">Role & Permission</h4>

                            </div>
                            <div>
                                <Button className="text-center btn-primary btn-icon me-2 mt-lg-0 mt-md-0 mt-3" onClick={handleShow}>
                                    <i className="btn-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </i>
                                    <span>New Permission</span>
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add new permission</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>permission title</Form.Label>
                                            <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Permission Title" />
                                        </Form.Group>
                                        <Button variant="primary" onClick={
                                            () => {
                                                permissionpush()
                                                handleClose()
                                            }
                                        }
                                        >
                                            Save
                                        </Button>{' '}
                                        <Button variant="danger" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Button className="text-center btn-primary btn-icon mt-lg-0 mt-md-0 mt-3" onClick={handleShow1}>
                                    <i className="btn-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </i>
                                    <span>New Role</span>
                                </Button>
                                <Modal show={show1} onHide={handleClose1}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add new role</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>role title</Form.Label>
                                            <Form.Control type="text" placeholder="Role Title" defaultValue={roleedit} onChange={e => setName1(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label >status</Form.Label>
                                        </Form.Group>
                                        <Form.Check>
                                            <Form.Check.Input type="radio" name="customRadio0" id="automatically" defaultChecked />{' '}
                                            <Form.Check.Label htmlFor="automatically" className="pl-2">yes</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check className="mb-3">
                                            <Form.Check.Input type="radio" name="customRadio0" id="automatically" defaultChecked />{' '}
                                            <Form.Check.Label htmlFor="automatically" className="pl-2">no</Form.Check.Label>
                                        </Form.Check>
                                        <Button variant="primary" onClick={
                                            () => {
                                                rolepush()
                                                handleClose1()
                                            }
                                        }>
                                            Save
                                        </Button>{' '}
                                        <Button variant="danger" onClick={handleClose1}>
                                            Cancel
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                                <Modal show={show2} onHide={handleClose2}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit permission</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Control type="text" defaultValue={editname} onChange={e => setName(e.target.value)} placeholder="Permission Title" />
                                        </Form.Group>
                                        <div>
                                            <div className="text-start mt-2 me-2">
                                                <Button onClick={
                                                    () => {
                                                        permissionupdate()
                                                        handleClose2()
                                                    }
                                                } >Update</Button>{' '}
                                                <Button variant="danger" onClick={handleClose2} >Cancel1</Button>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                                <Modal show={show3} onHide={handleClose3}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit role</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>role title</Form.Label>
                                            <Form.Control type="text" placeholder="Role Title" defaultValue={roleeditname} onChange={e => setName1(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label >status</Form.Label>
                                        </Form.Group>
                                        <Form.Check>
                                            <Form.Check.Input type="radio" name="customRadio0" id="automatically" defaultChecked />{' '}
                                            <Form.Check.Label htmlFor="automatically" className="pl-2">yes</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check className="mb-3">
                                            <Form.Check.Input type="radio" name="customRadio0" id="automatically" defaultChecked />{' '}
                                            <Form.Check.Label htmlFor="automatically" className="pl-2">no</Form.Check.Label>
                                        </Form.Check>
                                        <Button variant="primary" onClick={
                                            () => {
                                                roleupdate()
                                                handleClose3()
                                            }
                                        }>
                                            Update
                                        </Button>{' '}
                                        <Button variant="danger" onClick={handleClose3}>
                                            Cancel
                                        </Button>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            {
                                                role.map((item, index) =>

                                                (
                                                    <th className="text-center" key={index} >{item.name}
                                                        <div style={{ float: "right" }}>
                                                            <Link className="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip" title="Edit User" to="#" onClick={() => { roleedit(item.name, true, index) }}>
                                                                <span className="btn-inner">
                                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                                        <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </span>
                                                            </Link>
                                                            <Link className="btn btn-sm btn-icon text-danger" data-bs-toggle="tooltip" title="Delete User" to="#" onClick={() => { roledeleted(index) }}>
                                                                <span className="btn-inner">
                                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                                        <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            permission.map((item, index) =>
                                            (
                                                <tr className="" key={index} >
                                                    <td className="">{item.name}
                                                        <div style={{ float: "right" }}>
                                                            <Link className="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip" title="Edit User" to="#" onClick={() => { permissionedit(item.name, true, index) }} >
                                                                <span className="btn-inner">
                                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                                        <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </span>
                                                            </Link>
                                                            <Link className="btn btn-sm btn-icon text-danger " data-bs-toggle="tooltip" title="Delete User" to="#" onClick={() => { permissiondeleted(index) }}  >


                                                                <span className="btn-inner">
                                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                                        <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    </svg>
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    {role.map((item1, index) => (
                                                        <td className="text-center" key={index}>
                                                            {item1.status && item.status === true ?
                                                                <input className="form-check-input" type="checkbox" defaultChecked />
                                                                : <input className="form-check-input" type="checkbox" />

                                                            }
                                                        </td>
                                                    ))}
                                                    {/* <td className="text-center">
                                                            <input className="form-check-input" type="checkbox"/>
                                                        </td>
                                                        <td className="text-center">
                                                            <input className="form-check-input" type="checkbox"/>
                                                        </td> */}
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <Button onClick={() => history.push('/dashboard/admin/admin')} type="button" variant="primary">Save</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </>
    )
}
export default Admin;