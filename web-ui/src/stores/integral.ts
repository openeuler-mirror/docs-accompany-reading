export function dateHandle(month: any, tab: number) {
    //月份查询
    let date = new Date();
    let year = date.getFullYear();
    let startData = '';
    let endData = '';
    if (tab === 0) {
        let monthDate = new Date(year, month, 0);
        month < 10 ? month = `0${month}` : ''
        startData = `${year}-${month}-01`
        endData = `${year}-${month}-${monthDate.getDate()}`;
    } else {
        month = month * 2 + month + 1;
        let endMonth = month + 2;
        let monthDate = new Date(year, endMonth, 0);
        month < 10 ? month = `0${month}` : ''
        endMonth < 10 ? endMonth = `0${endMonth}` : ''
        startData = `${year}-${month}-01`
        endData = `${year}-${endMonth}-${monthDate.getDate()}`;
    }
    return { start: startData, end: endData }
}