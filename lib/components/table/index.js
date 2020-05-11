import React from 'react';

class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSource: []
        }
    }

    componentDidMount() {
        console.log('----componentDidMount---');

        log('aa')
    }

    render() {
        return (
            <>
                <div>table</div>
                <div>table2</div>
            </>
        )
    }
}

export default Table;
