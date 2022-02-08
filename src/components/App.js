import React from "react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class App extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <TableHeader />
                    <TableBody />
                </table>
                <hr />
                <table>
                    <TableHeader />
                    <TableBody />
                </table>
            </div>


        );
    }
}

export default App;
