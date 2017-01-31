import React, { Component } from 'react';
import { ListView } from 'react-native';
import ItemChooser from './ItemChooser';

class ItemChooserList extends Component {
  
  componentWillMount() {
    this.createDataSource(this.props.items);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.items);
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
        checked={this.props.checked.indexOf(item.id) !== -1} 
        item={item} 
        checkAction={this.props.checkAction} 
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
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxHeight: 120
  }
};
export default ItemChooserList;
