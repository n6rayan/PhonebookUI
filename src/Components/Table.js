import React, { Component } from 'react';
import ReactTable from 'react-table';

import { Request } from '../Request';

// Import default css for react-table
import 'react-table/react-table.css';

export class Table extends Component {
    constructor() {
        super();

        this.state = {
        };

        const request = new Request();
        request.getData().then(response => {
            this.setState({data: response.data.contacts});
        })
    }

    render() {
        const data = this.state.data;
        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
                filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) ||
                    row[filter.id].endsWith(filter.value)
            },
            {
                Header: 'Phone Number',
                accessor: 'phone_number'
            },
            {
                Header: 'Address',
                accessor: 'address',
                filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) ||
                    row[filter.id].endsWith(filter.value)
            }
        ];

        return <ReactTable
            data={data}
            filterable
            columns={columns}
        />;
    }
}