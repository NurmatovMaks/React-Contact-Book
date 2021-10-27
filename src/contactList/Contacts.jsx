import React from 'react';
import { Table, Button } from 'react-bootstrap';


const Contacts = (props) => {

    console.log(props);
    return (
        <div className='container'>
            {
                props.todos.length ?
                    (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Phone Number</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.todos.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.surname}</td>
                                            <td>{item.number}</td>
                                            <td>
                                                <Button onClick={() => props.deleteTask(item.id)} >del</Button>
                                            </td>

                                        </tr>
                                    ))
                                }


                            </tbody>
                        </Table>
                    )
                    :
                    (
                        <h2>No tasks</h2>
                    )
            }

        </div>
    );
};

export default Contacts;