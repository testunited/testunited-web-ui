import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import AppContext from '../../AppContext'

export class ApplicationListItem extends Component {

    render() {
        const { id, name } = this.props.item;
        const link = "/applications/" + id;
        return (
            <AppContext.Consumer>
                {({ application, setApplication }) => (
                    <div className="divTableRow">
                        <div className="divTableCell"><a href="#" onClick={() => setApplication({ id: id })} >{name}</a></div>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
}

export default ApplicationListItem;
