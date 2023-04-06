import React from 'react';
import pending from '../../assets/image/pending.png';
import process from '../../assets/image/process.png';
import close from '../../assets/image/close.png';
import Table from '../../components/table/Table';
import ChartBar from '../../components/chart/ChartBar';

const Dashboard = () => {
    return (
        <>
            <div className='judul-dashboard'>
                <h4>Dashboard</h4>
            </div>
            <div className='container-status'>
                <button className="kotak-pending">
                    <div className='status-pending'>
                        <h5>OnList</h5>
                        <p>18</p>
                    </div>
                        <img src={pending} alt="logo-hta" height="50" width="50" />
                    </button>
                <button className="kotak-process">
                    <div className='status-process'>
                        <h5>Process Order</h5>
                        <p>18</p>
                    </div>
                        <img src={process} alt="logo-hta" height="50" width="50" />
                </button>
                <button className="kotak-close">
                    <div className='status-close'>
                        <h5>Close Order</h5>
                        <p>18</p>
                    </div>
                    <img src={close} alt="logo-hta" height="50" width="50" />
                </button>
            </div>
            <div className="tableorder-chart">
                <div className='tableorder'>
                    <Table />
                </div>
                <div className='chart'>
                    <ChartBar />
                </div>
            </div>
        </>
    );
};

export default Dashboard;