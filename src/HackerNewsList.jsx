import React, { Component } from 'react';
import { Paper } from 'material-ui';

export default class HackerNewsList extends Component {
    static STYLES = {
        container: {
            padding: 16,
        },
    };

    render() {
        return (
            <Paper style={HackerNewsList.STYLES.container}>
                <span>HackerNewsList</span>
            </Paper>
        );
    }
}
