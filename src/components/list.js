import React from 'react';

export default ({list, _delete, _edit}) => {
    return (<ul>
        {
            list.map((value, index) => 
         
            <li key={index}>{value} <button onClick={() => _edit(index)}>Edit</button> <button onClick={() => _delete(index)}>Delete</button></li>
        
    )}
    </ul>);
};