import HackerNewsList from '../src/components/HackerNewsList';
import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import setupStore from '../src/store/store';

const store = setupStore();

storiesOf('HackerNewsList', module).add('List', () => (
    <div style={{ position: 'fixed' }}>
        <MuiThemeProvider>
            <Provider store={store}>
                <HackerNewsList />
            </Provider>
        </MuiThemeProvider>
    </div>
));
