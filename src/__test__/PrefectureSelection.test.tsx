import { render, screen } from "@testing-library/react";
import PrefectureSelection from "../Components/PrerfectureSelection";
import userEvent from "@testing-library/user-event";

describe('PrefectureSelection.tsx', () => {
    
    it('始めて選択された県の人口情報がデータフェッチされる', async () => {

        const mockPrefectures = [
            {
                prefName: '愛知県',
                prefCode: 1
            }
        ];

        //データフェッチされた県
        const mockFetchedPrefectures: string[] = [];
        //データフェッチ関数
        const mockFetchPopulations = jest.fn();

        const mockPushSelectedPrefectures = jest.fn();

        const mockRemoveSelectedPrefectures = jest.fn();
        
        render(
            <PrefectureSelection 
                prefectures={mockPrefectures}
                fetchedPrefectures={mockFetchedPrefectures} 
                fetchPopulations={mockFetchPopulations} 
                pushSelectedPrefectures={mockPushSelectedPrefectures} 
                removeSelectedPrefectures={mockRemoveSelectedPrefectures}
            />
        );
        
        // 愛知県チェック入れる
        userEvent.click(screen.getByLabelText("愛知県"));
        // 愛知県のデータが選択される
        expect(mockPushSelectedPrefectures).toHaveBeenCalledTimes(1);
        // データフェッチ関数が働かない
        expect(mockFetchPopulations).toHaveBeenCalledTimes(1);
        
    });
    
    it('1度データフェッチされた県は再びデータフェッチされない', async () => {

        const mockPrefectures = [
            {
                prefName: '愛知県',
                prefCode: 1
            }
        ];

        //データフェッチされた県
        const mockFetchedPrefectures: string[] = ['愛知県'];
        //データフェッチ関数
        const mockFetchPopulations = jest.fn();

        const mockPushSelectedPrefectures = jest.fn();

        const mockRemoveSelectedPrefectures = jest.fn();
        
        render(
            <PrefectureSelection 
                prefectures={mockPrefectures}
                fetchedPrefectures={mockFetchedPrefectures} 
                fetchPopulations={mockFetchPopulations} 
                pushSelectedPrefectures={mockPushSelectedPrefectures} 
                removeSelectedPrefectures={mockRemoveSelectedPrefectures}
            />
        );
        
        // 愛知県チェック入れる
        userEvent.click(screen.getByLabelText("愛知県"));
        // 愛知県のデータが選択される
        expect(mockPushSelectedPrefectures).toHaveBeenCalledTimes(1);
        // データフェッチ関数が働かない
        expect(mockFetchPopulations).toHaveBeenCalledTimes(0);
        
    });
});
