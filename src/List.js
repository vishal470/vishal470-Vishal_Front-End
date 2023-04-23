import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => {
    return (
        <li
            style={{
                backgroundColor: isSelected ? 'green' : 'red',
                cursor: 'pointer',
                width: '200px',
                height: '50px',
                textAlign: 'center',
                borderRadius: '5px',
                marginBottom: '10px',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                textTransform: 'uppercase',
            }}
            onClick={() => onClickHandler(index)}
        >
            {text}
        </li>
    );
});


SingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

// List Component
const List = memo(({ items }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        setSelectedIndex(null);
    }, [items]);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <ul >
            {items.map((item, index) => (
                <SingleListItem
                    key={index}
                    onClickHandler={handleClick}
                    text={item.text}
                    index={index}
                    isSelected={selectedIndex === index}
                />
            ))}
        </ul>
    );
});

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
        })
    ),
};

// List.defaultProps = {
//     items: [],
// };

export default List;
