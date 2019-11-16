import React from 'react';
import TestTargetListItem from './TestTargetListItem';
import ComponentListItem from '../Component/ComponentListItem';
import PropTypes from 'prop-types';
import axios from 'axios';
import Config from '../../Config';
import AppContext from '../../AppContext'
import TreeMenu from 'react-simple-tree-menu'

class TestTargetList extends React.Component {

  static contextType = AppContext;

  baseUrl = new Config().getApiHost();
  state = {
    testTargets: [],
    components: [],
    selectedComponent: {},
    treeData: []
  }

  componentDidMount() {
    axios.get(this.baseUrl + '/applications/' + this.context.application.id + '/components').then(resComponents => {
      var components = resComponents.data;
      var treeDataArray = [];

      components.forEach((component, componentIndex) => {
        var treeItem = {
          key: component.id,
          label: component.name,
          type: 'component'
        }

        var targets = [];

        axios.get(this.baseUrl + '/components/' + component.id + '/testtargets').then(targetsRes => {
          targets = targetsRes.data;
          var targetsArray = [];

          targets.forEach((target, targetIndex) => {
            var targetItem = {
              key: target.id,
              label: target.name,
              type: 'target'
            }

            targetsArray.push(targetItem);
          });

          treeItem.nodes = targetsArray;
        });

        treeDataArray.push(treeItem);
      });

      this.setState({ treeData: treeDataArray });
    });
  }

  handleComponentChange(id) {
    this.setState({ selectedComponent: { id: id } });
    axios.get(this.baseUrl + '/components/' + id + '/testtargets')
      .then(res => this.setState({ testTargets: res.data }))
  }

  render() {
    return (
      <div className="divTable">
        <div className="divTableBody">
          <div className="divTableRow">
            <div className="divTableCell" style={{ width: '40%' }}>
              <TreeMenu data={this.state.treeData} onClickItem={({ key, label, ...props }) => {
                if (props.type == 'target') {
                  console.log('nice')
                }
              }} />
            </div>
            <div className="divTableCell"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestTargetList;
