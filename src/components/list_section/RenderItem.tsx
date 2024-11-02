import {StyleSheet, View} from 'react-native';
import CustomText from '../CustomText.tsx';
import React from 'react';
import CustomButton from '../CustomButton.tsx';
import {ICON_TYPES} from '../CustomIcon.tsx';
import {Expense} from '../../types/Types.tsx';

const RenderItem = (props: {
  deleteAction: (item: Expense) => void;
  editAction: (item: Expense) => void;
  item: Expense;
}) => {
  const editAction = () => {
    props.editAction(props.item);
  };

  const deleteAction = () => {
    props.deleteAction(props.item);
  };

  return (
    <View key={props.item.id} style={style.container}>
      <View>
        <CustomText text={props.item.title} />
        <CustomText text={`Amount: ${props.item.amount}` + '$'} />
      </View>
      <View style={style.actionsContainer}>
        <CustomButton
          onPress={editAction}
          style={style.button}
          textProps={{text: 'Edit'}}
          iconProps={{iconType: ICON_TYPES.EDIT, iconSize: 15}}
        />
        <View style={{marginEnd: 15}} />
        <CustomButton
          onPress={deleteAction}
          style={style.button}
          textProps={{text: 'Delete'}}
          iconProps={{iconType: ICON_TYPES.TRASH, iconSize: 15}}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
  },
});

export default React.memo(RenderItem);
