import React, { Component } from 'react';
import { ListView } from 'react-native';
import ItemChooser from './ItemChooser';
import { FullScreen } from './common';

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
    if (this.props.checkAction) {
      return (
        <ItemChooser 
          checked={this.props.checked.indexOf(item.id) !== -1} 
          item={item} 
          checkAction={this.props.checkAction}
          editAction={this.props.editAction} 
          editKey={this.props.editKey}
        />
      );
    } else if (this.props.selectAction) {
      return (
        <ItemChooser 
          selected={this.props.selected === item.id} 
          item={item} 
          selectAction={this.props.selectAction} 
          editAction={this.props.editAction}
          editKey={this.props.editKey}
        />
      );
    } 
    console.error('ItemChooserList must have checkAction or selectAction passed in');
    return '';
  }

  render() {
    const { items } = this.props;

    if (items && items.length === 0) {
      return (
        <FullScreen 
          title='No items Found' 
          style={styles.fullScreenStyle}
        />
      );
    }

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
    padding: 5,
    minHeight: 80,
    maxHeight: 120
  },
  fullScreenStyle: {
    flex: 0,
    borderWidth: 1,
    height: 80
  }
};
export default ItemChooserList;
