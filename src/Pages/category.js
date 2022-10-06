import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Category</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        check status
      </button>
    </div>
  );
};

export default Category;
