import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const res = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <span>{res}</span>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
    </div>
  );
};

export default Category;
