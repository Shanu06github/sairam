import React from 'react'

export const Student = (props) => {
    const {} = props;
  return (
    <div className='one'>
        <table>
            <tr>
                <th>Name</th>
                <td>props.name</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>props.age</td>
            </tr>
            <tr>
                <th>Ismarried</th>
                <td>props.Ismarried</td>
            </tr>
        </table>

    </div>
  );
};
