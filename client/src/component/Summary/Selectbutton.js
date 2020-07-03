import React, { useState } from 'react';
import '@rmwc/button/styles';
import { Button } from '@rmwc/button';

const Selectbutton = () => {
    const [dailyIsOpen, setDailyIsOpen] = useState(false);
    return (

        <div className="button">
            {!dailyIsOpen ?
                <Button onClick={() => setDailyIsOpen(true)} label="Daily" outlined />
                :
                <Button onClick={() => setDailyIsOpen(false)} label="Daily" raised />
            }


            <Button label="Weekly" outlined />
            <Button label="Monthly" outlined />
        </div>
    )
}

export default Selectbutton;