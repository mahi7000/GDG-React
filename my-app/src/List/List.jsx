import React from 'react';
import './List.css';

export const List = () => {
    const groupName = ['Meaza', 'Mahi', 'Kido', 'Keri'];
    return (
        <div className='list'>
            <ul>
                {
                    groupName.map((member) => {
                        return <li>{member}</li>
                    })
                }
            </ul>
        </div>
    )
}
