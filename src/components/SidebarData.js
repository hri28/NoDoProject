import React from 'react';
import {BsReverseLayoutTextWindowReverse} from "react-icons/bs";
import {BsAlarm} from "react-icons/bs";
import {RiTodoLine} from "react-icons/ri"

const SidebarData = [
    {
    title: "Notes",
    icon: <BsReverseLayoutTextWindowReverse />,
    link: "/notes"
    },
    {
    title: "Timer",
    icon: <BsAlarm />,
    link: "/timer"
    }

]

export default SidebarData;
