import React from 'react';
import './header.css'

const Header = (props) => {
    let totalSalary = 0;
    const { salary } = props;
    salary.map(singleSalary => totalSalary+= singleSalary) // Adding all salary that already paid to employe.
    return (
        <div className='container'>
            <h1>Welcome to <span className="text-coral">Hero Kitchen</span></h1>
            <p>This is an app for keeping track of salaries, the money that restaurant employees have been paid we track with this app.</p>
            {/* Total employe of the Resturent */}
            <h3 className="p-2">Total Stuff: 50</h3>
            {/* Total budget of the Resturent for Employe Salary */}
            <h2 className="p-2">Total Budget: ${totalSalary}</h2> 
        </div>
    );
};

export default Header;