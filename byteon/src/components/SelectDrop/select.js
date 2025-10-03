import React, { useState } from 'react';
import '../SelectDrop/select.css';

const Select = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  return (
    <div className="selectDropWrapper cursor position-relative">
      {/* Toggle dropdown */}
      <span
        className="openselect"
        onClick={() => setIsOpenSelect(!isOpenSelect)}
      >
        All Categories
      </span>

      {isOpenSelect && (
        <div className="selectDrop">
          <div className="searchField">
            <input type="text" placeholder="Search category..." />
          </div>
          <ul className="searchResults">
            <li>Charger</li>
            <li>Cables</li>
            <li>Headphones</li>
            <li>Adapters</li>
            <li>Power Banks</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
