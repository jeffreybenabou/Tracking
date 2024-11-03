import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {storeData} from '../utils/StorageHandler.tsx';
import {Expense, ExpenseSection} from '../types/Types.tsx';
import {typeOfModalToShow} from '../utils/TypeOfModal.tsx';

export type CounterState = {
  currentExpense: Expense;
  fullName: string;
  loadingData: boolean;
  expenses: ExpenseSection[];
  filterExpenses: ExpenseSection[];
  totalAmount: number;
  typeOfModal: string;
  filters: string[];
  filteredExpensesValue: string;
};

const createInitialState = (): CounterState => ({
  fullName: '',
  loadingData: true,
  currentExpense: {id: -1, date: new Date(), amount: 0, title: ''},
  totalAmount: 0,
  filterExpenses: [],
  expenses: [],
  typeOfModal: typeOfModalToShow.EDIT,
  filters: [],
  filteredExpensesValue: '',
});

const initialState = createInitialState();
const restStateObject = createInitialState();

export const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTotalAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.totalAmount = action.payload;
    },
    setMultiFields: (
      state: CounterState,
      action: PayloadAction<Partial<CounterState>>,
    ) => {
      Object.keys(action.payload).forEach(key => {
        if (key === 'expenses') {
          (state as any).filterExpenses =
            action.payload[key as keyof CounterState];
        }
        (state as any)[key] = action.payload[key as keyof CounterState];
      });
    },
    restState: () => {
      return restStateObject;
    },
    setFullName: (state: CounterState, action: PayloadAction<string>) => {
      storeData('fullName', action.payload);
      state.fullName = action.payload;
    },
    setLoadingData: (state: CounterState, action: PayloadAction<boolean>) => {
      state.loadingData = action.payload;
    },
    deleteExpense: (state: CounterState, action: PayloadAction<Expense>) => {
      const sectionId = new Date(action.payload.date).toDateString();
      const sectionIndex: number = state.expenses.findIndex(
        (sectionToFind: ExpenseSection) => {
          return sectionToFind.title === sectionId;
        },
      );

      if (sectionIndex !== -1) {
        const index = state.expenses[sectionIndex].data.findIndex(
          expense => expense.id === action.payload.id,
        );
        if (index !== -1) {
          state.expenses[sectionIndex].data.splice(index, 1);
          if (state.expenses[sectionIndex].data.length === 0) {
            state.expenses.splice(sectionIndex, 1);
          }
        }
      }
      state.filterExpenses = state.expenses;
      storeData('expenses', state.expenses);
    },
    setExpenses: (
      state: CounterState,
      action: PayloadAction<ExpenseSection[]>,
    ) => {
      let expenses = action.payload.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
      state.filterExpenses = expenses;
      state.expenses = expenses;
      storeData('expenses', expenses);
    },
    setFilteredExpenses: (
      state: CounterState,
      action: PayloadAction<ExpenseSection[]>,
    ) => {
      state.filterExpenses = action.payload;
    },
    setCurrentExpense: (
      state: CounterState,
      action: PayloadAction<Expense>,
    ) => {
      state.currentExpense = action.payload;
    },
    setTypeOfModal: (state: CounterState, action: PayloadAction<string>) => {
      state.typeOfModal = action.payload;
    },
    setFilters: (state: CounterState, action: PayloadAction<string[]>) => {
      state.filters = action.payload;
    },
    setFilteredExpensesValue: (
      state: CounterState,
      action: PayloadAction<string>,
    ) => {
      state.filteredExpensesValue = action.payload;
    },
  },
});

export const {
  setFilteredExpensesValue,
  setTypeOfModal,
  setExpenses,
  deleteExpense,
  setFilteredExpenses,
  setMultiFields,
  setTotalAmount,
  setFullName,
  setCurrentExpense,
  setLoadingData,
  restState,
  setFilters,
} = counterReducer.actions;

export default counterReducer.reducer;
