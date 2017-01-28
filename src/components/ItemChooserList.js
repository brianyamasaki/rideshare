import React, { Component } from 'react';
import { ListView } from 'react-native';
import ItemChooser from './ItemChooser';

class ItemChooserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: props.chosen || []
    };
  }
  
  componentWillMount() {
    this.createDataSource(this.props.items);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.items);
  }

  onChange(checked, id) {
    const i = this.state.chosen.indexOf(id);
    if (checked && i === -1) {
      this.setState({
        chosen: this.state.chosen.concat(id)
      });
    } else if (!checked && i !== -1) {
      this.setState({
        chosen: this.state.chosen.slice(i, i + 1)
      });
    }
  }

  createDataSource(items) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(items);
  }

  renderRow(item) {
    return (
      <ItemChooser 
        checked={this.state.chosen.indexOf(item.id) !== -1} 
        item={item} 
        onChange={this.onChange.bind(this)} 
      />
    );
  }

  render() {
    return (
      <ListView 
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow.bind(this)}
      style={styles.listViewStyle}
      />
    );
  }
}

const styles = {
  listViewStyle: {
    maxHeight: 100
  }
};
export default ItemChooserList;
