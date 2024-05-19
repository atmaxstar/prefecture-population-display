// useStorePopulations.test.js
import { renderHook, act, waitFor } from '@testing-library/react';
import useStorePopulations, { PopulationTypeForChart } from '../hooks/useStorePopulations';
import { client } from '../config/client';
import PopulationResponse from '../ResponseTypes/Population.type';
import useFetchPrefectures from '../hooks/useFetchPrefectures';
import { mockPopulationData, mockPopulationResponseData } from './MockData_usePopulationStore';


describe('useStorePopulations', () => {

    it('データフェッチ後、理想の型に変換ができているか', async () => {
        
        // client.getにmockデータを返すように設定
        const apiSpy = jest.spyOn(client, "get");
        apiSpy.mockResolvedValue({ data: mockPopulationResponseData });

        const mockPrefCode = 1;
        const mockPrefName = '愛知県';
        
        const { result } = renderHook(() => useStorePopulations());

        await act(async () => {
            await result.current.fetchPopulations(mockPrefCode, mockPrefName);
        })
        
        expect(result.current.status).toBe('idle');
        expect(result.current.populationStore).toEqual(mockPopulationData);
        
    });
});
