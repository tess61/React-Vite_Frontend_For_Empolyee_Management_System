import React from 'react'

const LIstEmployeeComponent = () => {

    const dummyyData = [
        {
            "id": 1,
            "firstname": "Rames",
            "lastname": "fadatare",
            "email": "rames@gmail.com"
        },
        {
            "id": 2,
            "firstname": "tesfa",
            "lastname": "melka",
            "email": "tesf@gmail.com"
        },
        {
            "id": 3,
            "firstname": "emmy",
            "lastname": "fadatare",
            "email": "emmy@gmail.com"
        },
    ]

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employee</h2>
        <table className='table  table-hover table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default LIstEmployeeComponent