import React from "react";

class Table extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>Sarah</td>
                        <td>Doctor</td>
                    </tr>
                    <tr>
                        <td>Trish</td>
                        <td>Judge</td>
                    </tr>
                    <tr>
                        <td>Duke</td>
                        <td>NBA player</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;
