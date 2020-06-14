import React, {useState} from 'react';
import Table from "./../components/common/Table";
import Form from './../components/common/Form'
import Navigation from './../components/Navigation'
import 'bootstrap/dist/css/bootstrap.css';

const data = [
    {name: 'Star', year: '2010', capacity: '55', id: '1'},
    {name: 'SpaceX', year: '2003', capacity: '23', id: '2'},
    {name: 'Nasa', year: '2015', capacity: '10', id: '3'}
]

const columns = ["name", "year", "capacity", "id"];

function Starships() {
    const [starships, setStarships] = useState(data);
    console.log(starships);

    const handleAppStarship = (starshipData) => {
        const data = [...starships, starshipData];
        setStarships(data)
    }

    const getInitialStarshipsData = () => {
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
                data={starships}
                columns={columns}
                tableDescriptor="Starships"
            />
            }
            {data.length === 0 &&
            <h1>Unfortunately, there is no data</h1>
            }
            <Form
                initialData={getInitialStarshipsData()}
                columns={columns}
                onAddData={handleAppStarship}
            />
        </div>
    );
}

export default Starships;