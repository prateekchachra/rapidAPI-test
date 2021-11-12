import React, { useState, useCallback } from 'react'


interface ItemProps {
    item: Object,
    sendBackSelected: (selected: boolean) => void;
}

const Item = ({item, sendBackSelected}: ItemProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const onCheckboxClick = useCallback(() => {
        setIsSelected(val => !val)
        sendBackSelected(!isSelected);
    }, [isSelected, sendBackSelected]);

    return (
        <div className="item-container">
            <span className="item-checkbox" onClick={onCheckboxClick}>[{isSelected ? 'x' : ' '}]</span>
            {Object.keys(item).map(field =><span className="item-field">{field}</span>)}
        </div>
    )
}

export default React.memo(Item);
