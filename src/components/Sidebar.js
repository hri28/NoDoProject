import React from 'react';
import './Sidebar.css'
// import Todo from './Todo';
import SidebarData from './SidebarData';

function Sidebar({todos,setTodos,setStatus}){

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }


    return(
        <>
        <div className="Sidebar"> 
        <p className="heading">Dashboard</p>
        <ul className="SidebarList">
        {SidebarData.map((val,key) => {
            return (
                <li key={key} className="row" onClick={() => {
                    window.location.pathname = val.link;
                }}>
                <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                </li>
            );
        })}
        </ul>

        <p className="heading-1">Filter your todos。</p><br /><br /><br />
        <div className="filter-todo">
        <button className="fltr-btn" onClick={statusHandler} value="all">all</button><br />
        <button className="fltr-btn" onClick={statusHandler} value="completed">completed</button><br />
        <button className="fltr-btn" onClick={statusHandler} value="uncompleted">uncompleted</button><br />
        </div>
        </div>
        </>

    )
}

export default Sidebar;