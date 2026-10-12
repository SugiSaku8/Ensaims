# Ensaims — modular build

## 起動
ES Modules / WebGL / Web Audio を使います。`index.html` を直接開かず、フォルダ内で以下を実行してください。

```bash
python3 -m http.server 8000
```
`http://localhost:8000` をブラウザで開きます。

## モジュール
- `src/app.js`: ルーティングとアプリ起動
- `src/game/engine.js`: WebGL描画、判定、フリック、ロングノーツ、スコア、BPMマップ、Web Audio
- `src/game/screens.js`: 楽曲選択
- `src/game/play.js`: プレイ画面とエンジン接続
- `src/game/settings.js`: 設定
- `src/editor/`: 音源読み込み、譜面編集、テストプレイ、JSON入出力、ブラウザ内保存
- `src/shared/`: 設定・譜面保存

## Scales
テスト曲「Scales」はB♭メジャー音階をベースにした約1分の仮想曲です。4/4拍子、8小節ごとにBPMを変更します。音源ファイルは不要でWeb Audioで生成します。
