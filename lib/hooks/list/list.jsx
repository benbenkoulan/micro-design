import { useState } from 'react';

function useList(initialData) {
    const [data, setData] = useState(initialData);
    const render = (renderRow, renderEmpty) => {
        if (!data || !data.length) {
            renderEmpty();
            return;
        }
        return data.map(rowData => renderRow(rowData));
    }
    return [setData, render];
}

export default useList;
