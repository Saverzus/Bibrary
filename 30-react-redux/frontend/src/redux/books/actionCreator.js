import * as a from './actionTypes';

export const addBook = (newBook) => {
    return {
        type: a.addBook,
        payload: newBook
    }
}