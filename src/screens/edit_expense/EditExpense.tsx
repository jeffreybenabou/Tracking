import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Expense, ExpenseSection} from '../../types/Types.tsx';
import CustomInput from '../../components/CustomInput.tsx';
import CustomButton from '../../components/CustomButton.tsx';
import {regularButton} from '../../utils/globalStyles.tsx';
import useSmartSelectors from '../../hooks/useSmartSelectors.tsx';
import {useDispatch} from 'react-redux';
import {setCurrentExpense, setExpenses} from '../../redux/ReduxState.tsx';
import {useModal} from '../../components/modal/ModalProvider.tsx';
import DatePicker from 'react-native-date-picker';
import CustomText from '../../components/CustomText.tsx';
import cloneDeep from 'lodash/cloneDeep';

const EditExpense = () => {
  const dispatch = useDispatch();
  const {currentExpense = {id: -1, date: new Date()}, expenses = []} =
    useSmartSelectors(['currentExpense', 'expenses']);
  const [dateHasBeenChanged, setDateHasBeenChanged] = React.useState<
    Date | undefined
  >(undefined);
  const [expense, setExpense] = React.useState<Expense>(
    currentExpense as Expense,
  );

  useEffect(() => {
    return () => {
      dispatch(
        setCurrentExpense({
          id: -1,
          amount: 0,
          date: new Date(),
          title: '',
        }),
      );
    };
  }, []);
  const {closeModal} = useModal();

  const createIndex = useCallback(() => {
    return new Date().getTime();
  }, []);

  const handleChange = useCallback((field: keyof Expense, value: any) => {
    if (field === 'amount') {
      value = value.replace(/[^0-9.]/g, '');
      if (value.length != 0) {
        value = parseFloat(value);
      } else {
        value = 0;
      }
    }
    if (
      field === 'date' &&
      dateHasBeenChanged === undefined &&
      expense.id !== -1
    ) {
      setDateHasBeenChanged(expense.date);
    }
    setExpense(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const sectionIndex = (
    expensesArray: ExpenseSection[],
    date: Date,
  ): number => {
    const index = expensesArray.findIndex(expenseOnArray => {
      const dateOnSection = new Date(expenseOnArray.date);
      const date_ = new Date(date);
      return (
        dateOnSection.getFullYear() === date_.getFullYear() &&
        dateOnSection.getMonth() === date_.getMonth() &&
        dateOnSection.getDate() === date_.getDate()
      );
    });
    return index;
  };

  const saveData = () => {
    const expensesArray: ExpenseSection[] = cloneDeep(expenses);
    removeExpenseFromOldSection(expensesArray);
    const sectionIndex_ = sectionIndex(expensesArray, expense.date);
    if (sectionIndex_ === -1) {
      createNewDaySection(expensesArray);
    } else {
      const indexOfExpense = searchIfExpenseExists(
        expensesArray[sectionIndex_].data,
      );
      if (indexOfExpense !== -1) {
        expensesArray[sectionIndex_].data[indexOfExpense] = expense;
      } else {
        const expense_ = cloneDeep(expense);
        expense_.id = createIndex();
        expensesArray[sectionIndex_].data.push(expense_);
      }
    }

    dispatch(setExpenses(expensesArray));
    closeModal();
  };

  const removeExpenseFromOldSection = (expensesArray: ExpenseSection[]) => {
    if (dateHasBeenChanged) {
      const sectionIndex_ = sectionIndex(expensesArray, dateHasBeenChanged);
      const indexOfExpense = searchIfExpenseExists(
        expensesArray[sectionIndex_].data,
      );
      if (indexOfExpense !== -1) {
        expensesArray[sectionIndex_].data.splice(indexOfExpense, 1);
      }
    }
  };

  const searchIfExpenseExists = (expensesArray: Expense[]) => {
    return expensesArray.findIndex(exp => exp.id === expense.id);
  };

  const createNewDaySection = (expensesArray: ExpenseSection[]) => {
    const expense_: Expense = cloneDeep(expense);
    expense_.id = createIndex();
    expensesArray.push({
      title: expense_.date.toDateString(),
      date: expense_.date,
      data: [expense_],
    });
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>
        {currentExpense.id === -1 ? 'Edit Expense' : 'Create New Expense'}
      </Text>
      <CustomInput
        keyboardType={'numeric'}
        showLabel={true}
        labelText={'Amount'}
        value={'' + expense.amount}
        onChangeText={value => handleChange('amount', value)}
      />
      <View style={{marginTop: 25}} />
      <CustomInput
        showLabel={true}
        labelText={'Title'}
        value={'' + expense.title}
        onChangeText={value => handleChange('title', value)}
      />
      <CustomText style={style.dateTitle} text={'Pick Date'} />
      <View style={style.dateView}>
        <DatePicker
          style={style.dateContainer}
          date={new Date(expense.date)}
          onDateChange={value => handleChange('date', value)}
        />
      </View>

      <CustomButton
        onPress={saveData}
        textProps={{text: 'Save', style: regularButton.text}}
        style={[regularButton.button, style.saveButton]}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    width: 300,
    backgroundColor: 'white',
  },
  title: {
    marginBottom: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  saveButton: {
    marginTop: 25,
  },
  dateTitle: {
    fontSize: 20,
    marginTop: 20,
  },
  dateView: {borderColor: 'red', backgroundColor: '#bdc7ec', margin: 5},
  dateContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default EditExpense;
