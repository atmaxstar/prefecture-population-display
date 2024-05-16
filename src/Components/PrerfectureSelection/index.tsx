import React, { useState } from 'react'
import SelectBox from './SelectBox'
import './index.css'
import { Prefecture } from '../../ResponseTypes/Prefecture.type'

interface Props {
    prefectures: Prefecture[];
    fetchedPrefectures: string[];
    fetchPopulations: (prefCode: number, prefName: string) => Promise<void>;
    pushSelectedPrefectures: (prefName: string) => void;
    removeSelectedPrefectures: (prefName: string) => void;
}

const PrefectureSelection = ({prefectures, fetchedPrefectures, fetchPopulations, pushSelectedPrefectures, removeSelectedPrefectures}: Props) => {

    /**
     * チェックボックス選択動作
     * @param checked チェックの有無
     * @param { prefName, prefCode } 県の名前とコード
     */
    const toggleChecked = (checked: boolean, { prefName, prefCode }: { prefName: string, prefCode: number }) =>{
        //県を選択
        if (checked){
            pushSelectedPrefectures(prefName);
            // データフェッチされてない県は新規フェッチ
            if (!fetchedPrefectures.includes(prefName)){
                fetchPopulations(prefCode, prefName);
            }
        }
        //県を非選択
        else{
            removeSelectedPrefectures(prefName);
        }
    }

    return (
        <div>
            <div className='pref-header'>
                都道府県
            </div>
            {prefectures.map(pref => <SelectBox key={pref.prefName} prefCode={pref.prefCode} prefName={pref.prefName} toggleChecked={toggleChecked}/>)}
        </div>
    )
}

export default PrefectureSelection
