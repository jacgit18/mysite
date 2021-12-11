// A mock function to mimic making an async request for data
// The API FETCH takes the place of Constant and Part of ation

// CONSTANT
// export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
