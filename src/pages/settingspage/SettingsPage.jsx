/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Awan from '../../assets/image/Vector.png';
import ImgProfile from '../../assets/image/foto firman di pik.jpg';
import SideBar from '../../components/sidebar/Sidebar';
import Notif from '../../components/notif/Notif';

const Settings = () => {
    return (
        <>
        <SideBar>
            <Notif />
            <div className="judul-settings">
                <h1>Settings</h1>
            </div>
            <form className='form-settings'>
                <div className='ganti-foto-settings'>
                <img
                    src={ImgProfile}
                    width="90"
                    height="90"
                    className="rounded-full img-fluid mb-40"
                    />
                    <input 
                        type="image" 
                        src={Awan}
                        width="90"
                        height="90"
                    />
                </div>
                <div className='settings-grid'>
                    <input type="text" name="fullname" className="colum-FN" placeholder="FullName" />
                    <button className='btn-settings'>Ganti</button>
                </div>
            </form>
        </SideBar>
        </>
    );
};

export default Settings;