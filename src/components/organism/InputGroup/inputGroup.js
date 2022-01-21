import React from 'react';
import { ToggleSwitch } from '../../molecule/ToggleSwitch';
import { useState } from 'react';
import './inputGroup.css';
import { NumericDropdown } from '../../atom/NumericDropdown';

const InputGroup = (props) => {
    const [value, setValue] = useState(props.defaultValue || false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [childrenToggle, setChildrenToggle] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const onOptionClick = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    const handleToggle = () => {
        setChildrenToggle(!value)
        setValue(!value)
    }

    return (
        <div className={`${props.flagSize?props.flagSize:"col-md-12"}`}>
            <div className='input-group'>
                <div className='display-flex'>
                    <span className='bullet'/>
                    <span className='label'>{props.name}</span>
                    <div className='input-addon'>
                        {!!props?.hasDropdown && !!props?.dropdown &&
                            <NumericDropdown {...props.dropdown} {...{isOpen, toggle, selectedOption, onOptionClick}} />
                        }
                        <ToggleSwitch name={props.id} id={props.id} value={value} disabled={!!props?.disabled} handleToggle={handleToggle} />
                        {!!props?.hasChildren && !!props?.children?.fields && !!props?.children?.type &&
                            <span className={`childToggle ${childrenToggle ? 'open' : ''}`} onClick={() => setChildrenToggle(!childrenToggle)}></span>
                        }
                    </div>
                </div>
                {!!props?.hasChildren && !!props?.children?.fields && !!props?.children?.type && !!childrenToggle &&
                    <div className={`${props.children.type} row row-no-gutters`}>
                        {props.children.fields.length > 0 &&
                            props.children.fields.map((field, i) => (
                                <InputGroup key={i} {...field} defaultValue={!value ? false : field.defaultValue} disabled={!value?true:field.disabled}/>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export { InputGroup } 