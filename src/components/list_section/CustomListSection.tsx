import React, {useCallback} from 'react';
import {SectionList, SectionListData} from 'react-native';
import {Expense, SectionProps} from '../../types/Types';
import RenderItem from './RenderItem';
import SectionHeader from './SectionHeader';
import {useModal} from '../modal/ModalProvider';
import {useDispatch} from 'react-redux';
import {
  deleteExpense,
  setCurrentExpense,
  setTypeOfModal,
} from '../../redux/ReduxState';
import {typeOfModalToShow} from '../../utils/TypeOfModal.tsx';

const CustomListSection: React.FC<SectionProps> = props => {
  const {openModal} = useModal();
  const dispatch = useDispatch();

  const editAction = useCallback((item: Expense) => {
    dispatch(setCurrentExpense(item));
    dispatch(setTypeOfModal(typeOfModalToShow.EDIT));
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

  const renderItem = ({item}: {item: Expense}) => {
    return (
      <RenderItem
        deleteAction={deleteAction}
        editAction={editAction}
        item={item}
      />
    );
  };

  return (
    <SectionList
      keyExtractor={(item, index) => '' + (item.id + index)}
      {...props}
      ListEmptyComponent={() => <SectionHeader title="No expenses" />}
      sections={props.sections}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
    />
  );
};

export default CustomListSection;
