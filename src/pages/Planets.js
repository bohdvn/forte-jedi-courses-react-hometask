import React, {useState} from 'react';
import Table from "./../components/common/Table";
import Form from './../components/common/Form'
import Navigation from './../components/Navigation'
import 'bootstrap/dist/css/bootstrap.css';

const data = [
    {name: 'Mercury', 'distance from the Sun': '57.9', 'number of Moons': '0', id: '1'},
    {name: 'Venus', 'distance from the Sun': '108.2', 'number of Moons': '0', id: '2'},
    {name: 'Earth', 'distance from the Sun': '149.6', 'number of Moons': '1', id: '3'}
]

const columns = ["name", "distance from the Sun", "number of Moons", "id"];

function Planets() {
    const [planets, setPlanets] = useState(data);
    console.log(planets);

    const handleAppPlanet = (planetData) => {
        const data = [...planets, planetData];
        setPlanets(data)
    }

    const getInitialPlanetsData = () => {
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
                data={planets}
                columns={columns}
                tableDescriptor="Planets"
            />
            }
            {data.length === 0 &&
            <h1>Unfortunately, there is no data</h1>
            }
            <Form
                initialData={getInitialPlanetsData()}
                columns={columns}
                onAddData={handleAppPlanet}
            />
        </div>
    );
}

export default Planets;