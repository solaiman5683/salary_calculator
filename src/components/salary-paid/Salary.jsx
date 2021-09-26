import React from 'react';

const Salary = (props) => {
    console.log(props.data)
    const { title, first, last } = props.data.name
    return (
        <div>
            <li>{title} {first} {last}</li>
        </div>
    );
};

export default Salary;