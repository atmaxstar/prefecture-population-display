<div id="top"></div>

## 使用技術

<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
</p>

## 都道府県別の人口推移グラフ

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| React                 | 18.3.1     |

## ディレクトリ構成
<pre>
.
│  .gitignore
│  eslint.config.mjs
│  package-lock.json
│  package.json
│  tsconfig.json
│  
├─.github
│      README.md
│      
├─public
│      favicon.ico
│      index.html
│      logo192.png
│      logo512.png
│      manifest.json
│      robots.txt
│      
└─src
    │  App.css
    │  App.tsx
    │  index.css
    │  index.tsx
    │  logo.svg
    │  react-app-env.d.ts
    │  reportWebVitals.ts
    │  setupTests.ts
    │  
    ├─Components
    │  ├─PopulationChart
    │  │      Chart.tsx
    │  │      COLORS.ts
    │  │      index.css
    │  │      index.tsx
    │  │      
    │  ├─PrerfectureSelection
    │  │      index.css
    │  │      index.tsx
    │  │      SelectBox.css
    │  │      SelectBox.tsx
    │  │      
    │  └─StatusDisplay
    │          Loading.tsx
    │          style.css
    │          
    ├─config
    │      API.ts
    │      client.ts
    │      
    ├─hooks
    │      useFetchPrefectures.ts
    │      useStorePopulations.ts
    │      
    ├─ResponseTypes
    │      Common.type.ts
    │      Population.type.ts
    │      Prefecture.type.ts
    │      
    └─__test__
            App.test.tsx
            Hooks.test.tsx
            MockData_PopulationChartTest.ts
            MockData_usePopulationStore.ts
            PopulationChart.test.tsx
            PrefectureSelection.test.tsx
  </pre>
## デプロイ先
https://atmaxstar.github.io/prefecture-population-display/
