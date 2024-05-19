import { CommonResponse } from "./Common.type";

export interface Prefecture {
    prefCode: number;   //県コード
    prefName: string;   //○○県
}

export default interface PrefectureResponse extends CommonResponse {
    result: Prefecture[];
}