import React, { useEffect, useState } from 'react';
import Employe from '../Employe/Employe';
import Header from '../Header/Header';
import "./main.css"
import arrow from './arrow.svg'
import Salary from '../salary-paid/Salary';

const Main = () => {
    const [employes, setEmploye] = useState([])
    const [paidData, setPaidData] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/solaiman5683/employe-json/main/employe.json')
            .then(res => res.json())
            .then(data => {
                setEmploye(data);
            });
    }, [])



    const handleClick = (employe) => {
        let newEmploye = [...paidData, employe]
        if (!paidData.includes(employe)) {
            setPaidData(newEmploye)
        } else {
            alert('Salary already paid!')
        }
    }

    let totalPaid = 0;
    paidData.forEach(paidSalary => totalPaid += paidSalary.sallary)

    return (
        <div>
            <Header salary={employes.map(employe => employe.sallary)}></Header>

            <div className="flexbox">
                <div className="Employes">
                    {employes.map(employe => <Employe employeInfo={employe} handleClick={handleClick} key={employe.name.first + employe.name.last}></Employe>)}
                </div>
                <div className="salary">
                    <div className="salary-paid">
                        <h2>Total Paid: ${totalPaid}</h2>
                        <h3>Salary Paid to: </h3>
                        <ol>
                            {paidData.map(paidEmployeData => <Salary data={paidEmployeData} key={paidEmployeData.phone}></Salary>)}
                        </ol>
                    </div>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    );
};


export default Main;