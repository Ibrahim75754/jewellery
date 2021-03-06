import * as React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboradHome from './DashbosrdHome/DashboradHome';

import MyOrders from './UserDashboard/MyOrders/MyOrders';
import UserReview from './UserDashboard/UserReview/UserReview';
import useAuth from '../../hooks/useAuth';
import MakeAdmin from './AdminDashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './AdminDashboard/ManageAllOrders/ManageAllOrders';
import AddProduct from './AdminDashboard/AddProduct/AddProduct';
import ManageAllProducts from './AdminDashboard/ManageAllProducts/ManageAllProducts';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import ProductsUpdate from './AdminDashboard/ManageAllProducts/ProductsUpdate';
import './Dashboard.css';

const drawerWidth = 250;

function Dashboard(props) {
    const { admin, logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: "#653DF5", height: "100vh", color: "white" }}>
            <Toolbar >
                <h1 className="text-bold d-inline custom-font" style={{marginTop: "30px" }}>Jewellery</h1>
            </Toolbar>

            <ListItem button className='mt-3'>
                <Link to='/home' className='text-white text-decoration-none mb-2 w-100'>Home</Link>
            </ListItem>


            {
                admin ?
                    <Box>
                        <ListItem button className=''>
                            <Link to={`${url}/manageAllOrders`} className='text-white text-decoration-none mb-2 w-100'>Manage Orders</Link>
                        </ListItem>
                        <ListItem button className=''>
                            <Link to={`${url}/addProduct`} className='text-white text-decoration-none mb-2 w-100'>Add Product</Link>
                        </ListItem>
                        <ListItem button className=''>
                            <Link to={`${url}/manageAllProducts`} className='text-white text-decoration-none mb-2 w-100'>Manage Products</Link>
                        </ListItem>
                        <ListItem button className=''>
                            <Link to={`${url}/makeAdmin`} className='text-white text-decoration-none mb-2 w-100'>Make Admin</Link>
                        </ListItem>
                        
                    </Box>
                    :
                    <Box>
                        <ListItem button className='btn-hover'>
                            <Link to={`${url}/myOrders`} className='text-white text-decoration-none mb-2 w-100'>My Orders</Link>
                        </ListItem>
                        <ListItem button className='btn-hover'>
                            <Link to={`${url}/userReview`} className='text-white text-decoration-none mb-2 w-100'>Review</Link>
                        </ListItem>
                    </Box>
            }
            <Link to="/home"><button onClick={logout} className="btn btn-color w-100">LogOut</button></Link>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, backgroundColor: "#653DF5"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link to={`${url}`}><Button color="inherit" className="w-100 text-white text-decoration-none py-2 mb-2">Dashboard</Button></Link>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboradHome></DashboradHome>
                    </Route>
                    {/* <Route path={`${path}/payment/:ordersId`}>
                        <Payment></Payment>
                    </Route> */}
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/userReview`}>
                        <UserReview></UserReview>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageAllProducts`}>
                        <ManageAllProducts></ManageAllProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllProducts/:id`}>
                        <ProductsUpdate></ProductsUpdate>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
