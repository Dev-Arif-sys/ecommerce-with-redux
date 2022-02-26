import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import ManageOrders from '../../components/DashboardComponents/ManageOrders/ManageOrders';
import './Dashboard.css'
import { logOUt } from '../../Redux/Actions/AuthAction';

const Dashboard = () => {
    const [addClass, setAddClass] = useState(false)
    const dispatch=useDispatch()

    const handleToggle = () => {
        setAddClass(!addClass)
    }
    return (
        
            <div>
                <div className={addClass && 'toggled'} id="wrapper">

                    <div className="bg-white" id="sidebar-wrapper">
                        <h3 className='logo  ms-3 mt-4' >EMARKET</h3>
                        <div className="list-group list-group-flush my-3">

                           




                            {/* admin dashboard */}
                            <div> <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                                className='navLink' to={`/dashboard/manageOrders`} >
                                <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold "><i
                                        className="fas fa-tachometer-alt me-2"></i>Manage All Orders</p>
                             </NavLink>

                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                    className='navLink' to={`/dashboard/addProduct`}>
                                    <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                        className="fas fa-project-diagram me-2"></i>Add A Product</p>
                                </NavLink>
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                    className='navLink' to={`/dashboard/makeAdmin`}>
                                    <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                        className="fas fa-user-secret me-2"></i>Make Admin</p>
                                </NavLink>

                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                    className='navLink' to={`/dashboard/manageProducts`}>
                                    <p className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                        className="fas fa-paperclip me-2"></i>Manage Products</p>
                                </NavLink> </div>


                             <div className='ms-3' style={{ cursor: 'pointer' }} >
                                <p onClick={()=>dispatch(logOUt())} className="list-group-item list-group-item-action bg-transparent second-text fw-bold ">

                                    <i className="fas fa-sign-out-alt me-2"></i>Log Out</p>
                            </div>

                        </div>
                    </div>
                    {/* /#sidebar-wrapper  */}

                    {/* Page Content  */}


                    <div className='w-100'>
                        <Navbar >
                            <Container>
                                <Navbar.Brand href="#home">  <div className="d-flex align-items-center">
                                    <i onClick={handleToggle} className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                                    <h2 className="fs-2 m-0">Dashboard</h2>
                                </div></Navbar.Brand>
                                <Nav className="ms-auto">
                                    <Nav.Link as={Link} className='navItem' to="/">Home</Nav.Link>

                                    {/* <Nav.Link className='me-5 fw-bold' style={{marginRight:"30px"}} >{user?.displayName}</Nav.Link> */}
                                </Nav>
                            </Container>
                        </Navbar>

                          
                    <div className='m-5'>
                    <Outlet />
                    </div>
                       
                         

                          




                    </div>
                  
                </div>
            </div>
        
    );
};

export default Dashboard;