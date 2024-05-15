import React, { useState } from 'react'
import SelectBox from './SelectBox'
import './index.css'

const Mock_Prefectures = [
    {
        prefName: "愛知県",
        prefCode: 1
    },
    {
        prefName: "静岡県",
        prefCode: 2
    },
    {
        prefName: "山口県",
        prefCode: 3
    },
    {
        prefName: "長野県",
        prefCode: 4
    },
    {
        prefName: "高知県",
        prefCode: 5
    },
]

const PrefectureSelection = () => {
    const [prefectures, setPrefectures] = useState<{ prefName: string, prefCode: number }[]>([])
    const toggleChecked = (checked: boolean, { prefName, prefCode }: { prefName: string, prefCode: number }) =>{
        //県を追加
        if (checked){
            setPrefectures(prev => {
                prev.push({prefName: prefName, prefCode: prefCode});
                return prev
            })
        }
        //県を除去
        else{
            setPrefectures(prev => {
                prev.filter(pref => pref.prefCode !== prefCode);
                return prev
            });
        }
    }

    return (
        <div>
            <div className='pref-header'>
                都道府県
            </div>
            {Mock_Prefectures.map(pref => <SelectBox prefCode={pref.prefCode} prefName={pref.prefName} toggleChecked={toggleChecked}/>)}
        </div>
  )
}

export default PrefectureSelection
