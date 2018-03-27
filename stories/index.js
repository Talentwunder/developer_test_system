import HackerNewsList from '../src/HackerNewsList';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('HackerNewsList', module).add('List', () => (
    <div style={{ position: 'fixed' }}>
        <MuiThemeProvider>
            <HackerNewsList />
        </MuiThemeProvider>
    </div>
));
