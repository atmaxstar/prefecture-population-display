import React from 'react'
import './SelectBox.css'

// デザイン参照
// https://creative.eccom.jp/941/

interface Props {
    prefName: string;
    prefCode: number;
    toggleChecked: (checked: boolean, { prefName, prefCode }: { prefName: string, prefCode: number }) => void;
}

const SelectBox = ({prefName, prefCode, toggleChecked}: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleChecked(event.target.checked, { prefName: prefName, prefCode: prefCode })
    }

    return (
        <>
            <input type="checkbox" id={`checkbox-${prefCode}`} name="checkbox" onChange={handleChange}/>
            <label htmlFor={`checkbox-${prefCode}`} className="checkbox">{prefName}</label>
        </>
    )
}

export default SelectBox
