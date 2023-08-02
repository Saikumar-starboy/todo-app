import React from 'react';

const FilterButtons = ({ showAll, onShowAll, onShowCompleted }) => {
  return (
    <div className="filter-buttons">
      <button onClick={onShowAll}>All Tasks</button>
      <button onClick={onShowCompleted}>Completed Tasks</button>
    </div>
  );
};

export default FilterButtons;
