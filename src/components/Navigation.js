import React from 'react';
import TopAppBar, {
    TopAppBarFixedAdjust,
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

const Navigation = () => {
    return (
        <div>
            <TopAppBar>
                <TopAppBarRow>
                    <TopAppBarSection align='start'>
                        <TopAppBarIcon navIcon tabIndex={0}>
                            <MaterialIcon
                                hasRipple icon='menu'
                                onClick={() => console.log('click')}
                            />
                        </TopAppBarIcon>
                        <TopAppBarTitle>Miami, FL</TopAppBarTitle>
                    </TopAppBarSection>
                    <TopAppBarSection align='end' role='toolbar'>
                        <TopAppBarIcon actionItem tabIndex={0}>
                            <MaterialIcon
                                aria-label="print page"
                                hasRipple
                                icon='print'
                                onClick={() => console.log('print')}
                            />
                        </TopAppBarIcon>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
        </div>
    );
};

export default Navigation;