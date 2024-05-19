import { fireEvent, render, screen } from "@testing-library/react";
import PopulationChart from "../Components/PopulationChart";
import { PopulationTypeForChart } from "../hooks/useStorePopulations";
import { mock_populationStore, mock_selectedPrefectures } from "./MockData_PopulationChartTest";
import Chart from "../Components/PopulationChart/Chart";


describe('Components/PopulationChartテスト', () => {

    // rechartsは以下の要素で表現されてしまうのでテストができない。
    // <div
    //     class="recharts-responsive-container"
    //     style="width: 100%; height: 300px; min-width: 0;"
    // />
    // test('データを渡した際、線が表示される', async () => {
    //     // render()関数を使ってコンポーネントを描画
    //     await render(<Chart selectedPrefectures={mock_selectedPrefectures} populationStore={mock_populationStore} selectedLabel="総人口"/>);
        
        
    //     await screen.debug();

    //     const line_Aichi = await screen.findByTestId('line-愛知県');
    //     const line_Mie = await screen.findByTestId('line-三重県');
        
    //     // nullにならないことを期待する
    //     expect(line_Aichi).not.toBeNull();
    //     expect(line_Mie).not.toBeNull();
    // })

    /* --  テスト1 -- */
    test('radioボタンが1つのみ選択されることを確認', () => {
        // render()関数を使ってコンポーネントを描画
        render(<PopulationChart selectedPrefectures={mock_selectedPrefectures} populationStore={mock_populationStore}/>);
        
        
        // 各ラジオボタンが正しくレンダリングされていることを確認
        const souzinkou = screen.getByLabelText('総人口');
        const nensyou = screen.getByLabelText('年少人口');
        const seisan = screen.getByLabelText('生産年齢人口');
        const rounen = screen.getByLabelText('老年人口');

        //存在確認
        expect(souzinkou).toBeInTheDocument();
        expect(nensyou).toBeInTheDocument();
        expect(seisan).toBeInTheDocument();
        expect(rounen).toBeInTheDocument();

        //初期値
        expect(souzinkou).toBeChecked();
        expect(nensyou).not.toBeChecked();
        expect(seisan).not.toBeChecked();
        expect(rounen).not.toBeChecked();

        // 年少人口をクリック
        fireEvent.click(nensyou);
        expect(souzinkou).not.toBeChecked();
        expect(nensyou).toBeChecked();
        expect(seisan).not.toBeChecked();
        expect(rounen).not.toBeChecked();

        // 生産年齢人口をクリック
        fireEvent.click(seisan);
        expect(souzinkou).not.toBeChecked();
        expect(nensyou).not.toBeChecked();
        expect(seisan).toBeChecked();
        expect(rounen).not.toBeChecked();

        // 老年人口をクリック
        fireEvent.click(rounen);
        expect(souzinkou).not.toBeChecked();
        expect(nensyou).not.toBeChecked();
        expect(seisan).not.toBeChecked();
        expect(rounen).toBeChecked();

        // 総人口をクリック
        fireEvent.click(souzinkou);
        expect(souzinkou).toBeChecked();
        expect(nensyou).not.toBeChecked();
        expect(seisan).not.toBeChecked();
        expect(rounen).not.toBeChecked();
    })

})
