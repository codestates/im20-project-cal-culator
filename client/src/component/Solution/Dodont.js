import React from 'react';
import '@rmwc/textfield/styles';
import { TextField } from '@rmwc/textfield'

const DoDont = () => {

    const [startDate, setStartDate] = React.useState();

    return (
        <div>
            <TextField selected={startDate} onChange={e => setStartDate(e.target.value)} label="date" type="date" />
        </div>
    )
}

export default DoDont;

