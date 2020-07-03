import React from 'react';
import '@rmwc/button/styles';
import { Button } from '@rmwc/button';

const SearchButton = () => {
    return (
        //검색 버튼을 클릭했을 때 검색한 결과가 나올 수 있도록 하는 onClick 이벤트 구현
        <div>
            <Button label="Raised" raised />
        </div>
    )
}

export default SearchButton;