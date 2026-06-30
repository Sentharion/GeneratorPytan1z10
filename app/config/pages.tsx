import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

export const pages = {
    home: {
        title: "Jeden z Iluś",
        buttons: [
            {
                link: "/gra-jednoosobowa",
                text: "Gra Jednosobowa",
                icon: <FaUser size={50}/>
            },
            {
                link: "/gra-wieloosobowa",
                text: "Gra Wieloosobowa",
                icon: <FaUserFriends size={50}/>
            },
        ]
    },
    panelProwadzacego: {
        title: "Panel Prowadzącego",
        buttons: [
            {
                link: "/gra-wieloosobowa/gra-lokalna/panelProwadzacego/etap1",
                text: "Etap I",
            },
            {
                link: "/gra-wieloosobowa/gra-lokalna/panelProwadzacego/etap2",
                text: "Etap II",
            },
            {
                link: "/gra-wieloosobowa/gra-lokalna/panelProwadzacego/final",
                text: "Finał",
            },
        ]
    },
    graWieloosobowa:{
        title: "Gra Wieloosobowa",
        buttons: [
            {
                link: "/gra-wieloosobowa/gra-boty",
                text: "Graj sam",
            },
            {
                link: "/gra-wieloosobowa/gra-lokalna",
                text: "Graj z innymi",
            },
        ]
    },
    graLokalna:{
        title: "Gra Lokalna",
        buttons: [
            {
                link: "/gra-wieloosobowa/gra-lokalna/panelProwadzacego",
                text: "Panel Prowadzącego",
            },
            {
                link: "/gra-wieloosobowa/gra-lokalna/panelGracza",
                text: "Panel Gracza",
            },
        ]
    },
}