import * as React from 'react';
import { connect } from 'react-redux';
import { getSettings, getState, State } from '../../data';
import { getPlugin, Plugin, Settings } from '../../plugins';
import './Widgets.css';

interface Props {
  id: string;
  plugin: Plugin;
  settings: Settings;
  state: any;
}

class Widgets extends React.Component<Props> {
  render() {
    return (
      <this.props.plugin.Dashboard
        {...this.props.settings}
        state={this.props.state}
      />
    );
  }
}

const mapStateToProps = (state: State, props: {id: string}) => {
  return {
    plugin: getPlugin(props.id),
    settings: getSettings(state.plugins, props.id),
    state: getState(state.plugins, props.id),
  };
}

export default connect(mapStateToProps, {})(Widgets);