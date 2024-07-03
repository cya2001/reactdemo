import React from 'react'
import classes from './style/header.module.css';
import {links} from "./../lib/data.ts";
import {useActiveSectionContext} from './../context/active-section-context.tsx';

export default function Header() {

  const {activeSection,setActiveSection,timeOfLastClick,setTimeOfLastClick} =  useActiveSectionContext();
  
  const handleLinkClick = (linkname)=>{
    setActiveSection(linkname);
    setTimeOfLastClick(Date.now());
  }

  return (
    <header className={classes.header}>
      <div className={classes['nav-wrapper']}>

      </div>
      <nav className={classes['nav-text']}>
        <ul className={classes['nav-list']}>
          {links.map((link,index)=>(
            <li
              key={link.hash}
              style={{
                height: '75%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <a
                href={link.hash}
                style={{
                  [classes['nav-link']]: true,
                  [activeSection === link.name ? classes['active'] : '']: true,
                  transition: 'all 0.3s ease',
                }}
                onClick={()=>handleLinkClick(link.name)}
              >
              
              {link.name}

              {link.name === activeSection && (
                <span
                  style={{
                    backgroundColor: 'grey',
                    borderRadius: '9999px',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: -10,
                  }}
                ></span>
              )}

            </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
