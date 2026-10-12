const SETTINGS_KEY='ensaims.settings.v2',CHARTS_KEY='ensaims.charts.v2';
export function loadSettings(){try{return {...{lanes:10,noteSpeed:1.25,music:true,showFps:false},...JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}')}}catch{return {lanes:10,noteSpeed:1.25,music:true,showFps:false}}}
export function saveSettings(s){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(s))}catch{}}
export function loadCharts(){try{return JSON.parse(localStorage.getItem(CHARTS_KEY)||'[]')}catch{return []}}
export function saveCharts(charts){localStorage.setItem(CHARTS_KEY,JSON.stringify(charts))}
