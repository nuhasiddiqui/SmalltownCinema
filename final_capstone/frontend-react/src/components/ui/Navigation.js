import React from 'react'
import './navigation.css'

const Navigation = ({ pages }) => {
    return (
      <ul className="nav">
        {pages.map((page) => (
          <li key={page.page_id} className={page.active ? 'active' : ''}>
            <a href={page.link}>{page.name}</a>
          </li>
        ))}
      </ul>
    );
};

export default Navigation
