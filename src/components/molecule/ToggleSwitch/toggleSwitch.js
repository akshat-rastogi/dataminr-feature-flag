import React from 'react';
import "./toggleSwitch.css";

const ToggleSwitch = (props) => {
    return (
        <>
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    checked={props.value}
                    defaultChecked={props.defaultValue}
                    onChange={props.handleToggle}
                    id={props.id}
                    disabled={props.disabled}
                    name={props.id}
                    role="switch" 
                    aria-checked={props.value}
                />
                <span className="switch" />
            </label>
        </>
    );
}

export {ToggleSwitch};