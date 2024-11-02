import React, {useCallback} from 'react';
import {SectionList, SectionListData} from 'react-native';
import {Expense, SectionProps} from '../../types/Types';
import RenderItem from './RenderItem';
import SectionHeader from './SectionHeader';
import {useModal} from '../modal/ModalProvider';
import {useDispatch} from 'react-redux';
import {deleteExpense, setCurrentExpense} from '../../redux/ReduxState';

const CustomListSection: React.FC<SectionProps> = props => {
  const {openModal} = useModal();
  const dispatch = useDispatch();

  const editAction = useCallback((item: Expense) => {
    dispatch(setCurrentExpense(item));
    openModal();
  }, []);

  const deleteAction = useCallback((item: Expense) => {
    dispatch(deleteExpense(item));
  }, []);

  const renderSectionHeader = useCallback(
    ({section}: {section: SectionListData<Expense>}) =>
      section.data.length > 0 ? <SectionHeader title={section.title} /> : null,
    [],
  );
  const renderItem = useCallback(
    ({item}: {item: Expense}) => (
      <RenderItem
        deleteAction={deleteAction}
        editAction={editAction}
        item={item}
      />
    ),
    [deleteAction, editAction],
  );

  return (
    <SectionList
      {...props}
      sections={props.sections}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={(item: Expense) => item.id.toString()} // Ensure unique keys
    />
  );
};

export default CustomListSection;
