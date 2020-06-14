import React, {useState} from 'react';
import Button from "./Button";

function Table({columns, data, tableDescriptor}) {
    const [personData, setPersonData] = useState(data);

    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">{tableDescriptor}</th>
                {columns.map(columnTitle => (
                    <th key={columnTitle} scope="col">{columnTitle}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={item.id}>
                    <th scope="row">{++index}</th>
                    {columns.map(columnTitle => (
                        <td key={item[columnTitle] + columnTitle}>{item[columnTitle]}</td>
                    ))}
                    <td>
                        <Button
                            label="Delete"
                            classes="btn btn-danger"
                            onClick={() => setPersonData(data.splice(index - 1, 1))}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table;
