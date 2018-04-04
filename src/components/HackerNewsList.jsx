import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, RaisedButton, CircularProgress } from 'material-ui';
import { connect } from 'react-redux';
import { fetchTopstoriesIds } from '../actions/hackerNews';

/**
 * The container class for rendering multiple HackerNews stories.
 * 
 * @author Timo Hanisch
 */
class HackerNewsList extends Component {
    /* Inline style for the container component */
    static STYLES = {
        container: {
            padding: 16,
            width: 600,
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        body: {
            marginTop: 32,
            marginBottom: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: 600,
            overflow: 'auto',
        },
    };

    constructor() {
        super();
        this.onFetchNews = this.onFetchNews.bind(this);
    }

    onFetchNews() {
        const { fetchTopstories } = this.props;
        fetchTopstories();
    }

    renderEmptyBody() {
        return <span>No stories loaded yet</span>;
    }

    renderBody() {
        const { topstories, topstoriesError, topstoriesLoading } = this.props;
        if (topstoriesLoading) {
            return <CircularProgress />;
        }
        return topstories.map(topstory => <span key={topstory}>{`Topstory-ID: ${topstory}`}</span>);
    }

    render() {
        const { topstories, topstoriesError, topstoriesLoading } = this.props;
        return (
            <Paper style={HackerNewsList.STYLES.container}>
                <div style={HackerNewsList.STYLES.header}>
                    <h4>HackerNews Topstories</h4>
                    <RaisedButton onClick={this.onFetchNews} label="Fetch news" primary disabled={topstoriesLoading} />
                </div>
                <div style={HackerNewsList.STYLES.body}>
                    {!topstories || !topstories.length ? this.renderEmptyBody() : this.renderBody()}
                </div>
            </Paper>
        );
    }
}

HackerNewsList.propTypes = {
    fetchTopstories: PropTypes.func.isRequired,
    topstories: PropTypes.array.isRequired,
    topstoriesError: PropTypes.bool.isRequired,
    topstoriesLoading: PropTypes.bool.isRequired,
};

// Initializes Redux for the container component. 
const mapStateToProps = ({ topstories, topstoriesError, topstoriesLoading }) => {
    return {
        topstories,
        topstoriesError,
        topstoriesLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTopstories: () => dispatch(fetchTopstoriesIds()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HackerNewsList);
