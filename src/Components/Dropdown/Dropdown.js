import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    const handleScroll = () => {
        setOpen(false); // Close the dropdown when scrolling occurs
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            window.removeEventListener('scroll', handleScroll); // Remove scroll event listener
        };
    }, []);

    return (
        <div className='dropdown' ref={dropdownRef}>
            <li onClick={handleOpen}>Products</li>
            {open && (
                <ul className='menu'>
                    <li className='menu-item'>Freshworks</li>
                    <li className='menu-item'>Click Up</li>
                    <li className='menu-item'>Digital.ai</li>
                    <li className='menu-item'>Zendesk</li>
                    <li className='menu-item'>Monday.com</li>
                    <li className='menu-item'>AlTOVA</li>
                    <li className='menu-item'>GitLab</li>
                    <li className='menu-item'>Nagios</li>
                    <li className='menu-item'>JetBrains</li>
                    <li className='menu-item'>Jfrog</li>
                    <li className='menu-item'>GitHub</li>
                    <li className='menu-item'>Smartbear</li>
                    <li className='menu-item'>TestRail</li>
                    <li className='menu-item'>Tableau Software </li>
                    <li className='menu-item'>Alteryx Software </li>
                    <li className='menu-item'>Qlik Software </li>
                    <li className='menu-item'>AWS</li>
                    <li className='menu-item'>MS Azure </li>
                    <li className='menu-item'>Site 24X7</li>
                    <li className='menu-item'>CloudBees </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
