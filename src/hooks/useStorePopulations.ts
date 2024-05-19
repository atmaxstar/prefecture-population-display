import { useState } from "react"
import PopulationResponse, { Populations } from "../ResponseTypes/Population.type"
import { client } from "../config/client";
import { URL_POPULATION } from "../config/API";

export type PopulationTypeForChart = {
    総人口: {
			year: number;
			[prefecture: string]: number;
	}[];
    年少人口: {
			year: number;
			[prefecture: string]: number;
	}[];
    生産年齢人口: {
			year: number;
			[prefecture: string]: number;
	}[];
    老年人口: {
			year: number;
			[prefecture: string]: number;
	}[];
}

const initialData = [
	{year: 1960},{year: 1965},{year: 1970},{year: 1975},{year: 1980},{year: 1985},{year: 1990},{year: 1995},{year: 2000},{year: 2005},{year: 2010},{year: 2015},{year: 2020},{year: 2025},{year: 2030},{year: 2035},{year: 2040},{year: 2045}
]

const initialState: PopulationTypeForChart = {
    総人口: initialData,
    年少人口: initialData,
    生産年齢人口: initialData,
    老年人口: initialData,
}

const useStorePopulations = () => {
    const [status, setStatus] = useState<'loading'|'idle'|'error'>('idle');

    //チャート表示に適した型で保持
	const [populationStore, setPopulationStore] = useState<PopulationTypeForChart>(initialState);
    //データキャッシュの為にフェッチ済みの県を保持
	const [fetchedPrefectures, setFetchedPrefectures] = useState<string[]>([])

    
	/**
     * フェッチしたデータをストアする関数
	 * @param pops_added 追加する県の人口構成
	 * @param prefName 追加する県の名前
	 */
	const pushPopulation = (pops_added: Populations, prefName: string) => {
		// 元のオブジェクトと別物とするためにディープコピー
        let newPopulationStore = JSON.parse(JSON.stringify(populationStore)) as PopulationTypeForChart;
		// 総人口、年少人口、生産年齢人口、老年人口それぞれのラベルに対して
		pops_added.forEach((pop_added => {
			// pop_added: { label: "生産年齢人口"; data: Data[]; }
            let dataPerLabel = newPopulationStore[pop_added.label];
			// 各年に対して
			pop_added.data.forEach(py => {
				// py: { year: number; value: number; rate?: number;}
				// 挿入する年度の入っているオブジェクトのインデックスを検索
				const indexOfInsertedYear = dataPerLabel.map(p => p.year).indexOf(py.year);
				// 追加する年度が存在しなかったら新規作成
				if (indexOfInsertedYear === -1){
                    dataPerLabel.push({year: py.year, [prefName]: py.value});
				}
				else{
					// op.year年度にpreNameの県の値を挿入
					dataPerLabel[indexOfInsertedYear] = {...dataPerLabel[indexOfInsertedYear], [prefName]: py.value};
				}
			})
            // 更新したラベルのデータをセット
            newPopulationStore[pop_added.label] = dataPerLabel;
		}))
        //更新した値をセット
        setPopulationStore(newPopulationStore);

		// データフェッチした県を記録
		setFetchedPrefectures(prev => {
			return [...prev, prefName];
		});
	}

    const fetchPopulations = async (prefCode: number, prefName: string) => {
        await client.get<PopulationResponse>(URL_POPULATION, {
                        params: {
                            prefCode: prefCode,
                            cityCode: '-'
                        }
                    })
                    .then(res => {
                        setStatus('idle');
                        const populations_added = res.data.result.data;
                        pushPopulation(populations_added, prefName);
                    })
                    .catch(err => {
                        console.log(err);
                        setStatus('error');
                    });
    }

    return { status, populationStore, fetchedPrefectures, fetchPopulations };
}

export default useStorePopulations
