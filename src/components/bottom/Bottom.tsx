import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import config from '../../config/config';
import { useHistory } from 'react-router';
const { baseURL } = config;

const bottomStyle = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        left: 0,
        bottom: 0,
    },
});

const bottomActionStyle = makeStyles({
    root: {
        width: '100%',
        maxWidth: 800,
    },
});

const Bottom: React.FC = () => {
    const bottomClass = bottomStyle();
    const bottomActionClass = bottomActionStyle();

    const [ value, setValue ] = useState(0);

    const history = useHistory();

    const onActionClicked = (path: string) => {
        history.push(baseURL+path);
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            classes={bottomClass}
        >
            <BottomNavigationAction 
                label="ホーム" 
                icon={<HomeIcon />} 
                classes={bottomActionClass}
                onClick={() => {
                    onActionClicked('/');
                }}
            />
            <BottomNavigationAction 
                label="単語リスト" 
                icon={<ListIcon />} 
                classes={bottomActionClass}
                onClick={() => {
                    onActionClicked('/list');
                }}
            />
            <BottomNavigationAction 
                label="単語カード" 
                icon={<AspectRatioIcon />} 
                classes={bottomActionClass}
                onClick={() => {
                    onActionClicked('/memorize');
                }}
            />
            <BottomNavigationAction  
                label="テスト" 
                icon={<BorderColorIcon />} 
                classes={bottomActionClass}
                onClick={() => {
                    onActionClicked('/test');
                }}
            />
        </BottomNavigation>
    )
}

export default Bottom;