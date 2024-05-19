import { render, screen } from "@testing-library/react";
import App from "../App";
import * as useFetchPrefecturesHook from '../hooks/useFetchPrefectures';
import * as useStorePopulationsHook from '../hooks/useStorePopulations'
import userEvent from "@testing-library/user-event";
import { client } from "../config/client";
import PrefectureResponse from "../ResponseTypes/Prefecture.type";
import { mockPopulationResponseData } from "./MockData_usePopulationStore";

jest.mock('../hooks/useFetchPrefectures');

describe('App.tsx', () => {

    it('レンダリング時にfetchPrefecturesが呼ばれる', async () => {
            
        const mockFetchPrefectures = jest.fn();
        const mockUseFetchPrefecture = {
            status: 'idle',
            fetchPrefectures: mockFetchPrefectures,
            prefectures: [],
        };

        (useFetchPrefecturesHook.default as jest.Mock).mockReturnValue(mockUseFetchPrefecture);
        
                
        render(<App/>);

        
        expect(mockFetchPrefectures).toHaveBeenCalledTimes(1);
        
    });
    
});
