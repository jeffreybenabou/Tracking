const Middleware = (store: any) => (next: any) => (action: any) => {
  if (action.type === 'counter/setMultiFields') {
  }
  next(action);
};

export default Middleware;
