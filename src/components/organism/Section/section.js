import React from 'react';
import { InputGroup } from '../InputGroup';
import './section.css';

const Section = (props) => {
    const { title, size, components: { type, fields } } = props;

    const className = 'col-md-' + size;
    const sectionSize = type === "individual" ? "row" :"row row-no-gutters";
    const flagSize = type==="individual"? "col-md-4":"";

    return <div className={className}>
            <h1 className='title'>{title}</h1>
            {!!fields && !!type &&
                <div className={`${type} ${sectionSize}`}>
                    {fields.length > 0 &&
                        fields.map((field, i) => (
                            <InputGroup key={i} {...field} flagSize={flagSize} />
                        ))
                    }
                </div>
            }
        </div>
}

export { Section }