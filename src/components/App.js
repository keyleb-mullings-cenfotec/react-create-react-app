import React from "react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class App extends React.Component {
    render() {
        const characters = [{
            name: 'John',
            job: 'Smithery'
        },
        {
            name: 'Clyde',
            job: 'Carpenter'
        },
        {
            name: 'Sam',
            job: 'Banker'
        },
        {
            name: 'Rayone',
            job: 'Engineer'
        }]
        
        return (
            <div className="container">
                <Table characters={characters}/>
            </div>
        );
    }
}

export default App;
