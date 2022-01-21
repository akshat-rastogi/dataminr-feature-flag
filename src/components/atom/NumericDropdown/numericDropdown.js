import React from 'react';
import './numericDropdown.css';

const NumericDropdown = (props) => {
    const { minValue, maxValue, defaultValue, isOpen, toggle, selectedOption, onOptionClick } = props;
    
    const options = Array(maxValue - minValue + 1).fill().map((_, idx) => minValue + idx);

    return (
        <div className="dropDownContainer">
            <div className={`dropDownHeader ${isOpen ? 'open' : ''}`} onClick={toggle} disabled={props.disabled}>
                {selectedOption || defaultValue}
            </div>
            {isOpen && (
                <div className="dropDownListContainer">
                    <ul className="dropDownList">
                        {options.map(option => (
                            <li className="listItem" onClick={onOptionClick(option)} key={Math.random()}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export { NumericDropdown }