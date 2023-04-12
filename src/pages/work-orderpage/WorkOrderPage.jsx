import React from 'react';
import SideBar from '../../components/sidebar/Sidebar';
import Notif from '../../components/notif/Notif';
import Table from '../../components/table/Table';

const WorkOrderPage = () => {
    return (
        <>
        <SideBar>
        <Notif />
            <div className='judul-orderan'> 
                <h1>Work Order</h1>
            </div>
            <div className='container-wo-page'>
                <Table />
            </div>
        </SideBar>
        </>
    );
};

export default WorkOrderPage;