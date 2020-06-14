import React, {useState} from 'react';
import Table from "./../components/common/Table";
import Form from './../components/common/Form'
import Navigation from './../components/Navigation'
import 'bootstrap/dist/css/bootstrap.css';

const data = [
    {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
    {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
    {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'}
]

const columns = ["first", "last", "handle", "id"];

function People() {
    const [people, setPeople] = useState(data);
    console.log(people);

    const handleAppPerson = (personData) => {
        const data = [...people, personData];
        setPeople(data)
    }

    const getInitialPeopleData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            <Navigation/>
            {data.length !== 0 &&
            <Table
                data={people}
                columns={columns}
                tableDescriptor="People"
            />
            }
            {data.length === 0 &&
            <h1>Unfortunately, there is no data</h1>
            }
            <Form
                initialData={getInitialPeopleData()}
                columns={columns}
                onAddData={handleAppPerson}
            />
        </div>
    );
}

export default People;