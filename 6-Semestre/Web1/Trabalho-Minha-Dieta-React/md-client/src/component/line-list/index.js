import React from 'react';
import { Link } from 'react-router-dom';
import './line-list.css';

function LineList({itens, link}) {
    return(
        <tr className="line-list">
            {
                itens.map((value) => <td>{value}</td> )
            //   itens.map((value) => {
            //     return <li>{value}</li>   
            //   })
            }
            {link ? <td><Link to ={link}><i class="fas fa-edit"></i></Link></td> : null}
            
        </tr>
    );
}

export default LineList;