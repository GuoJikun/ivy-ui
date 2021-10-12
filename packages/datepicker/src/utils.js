/**
 * 是否是闰年
 * @param {*} y
 * @returns Boolean
 */
const isLeapYear = y => {
    return (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0 && y % 3200 != 0) || y % 172800 == 0;
};

/**
 * 某一天是周几
 * @param {String} dateString 精确到天的日期
 * @returns Number
 */
const whichDay = dateString => {
    return new Date(dateString).getDay();
};
/**
 * 获取当前月份有多少天
 * @param {*} m
 * @param {*} y
 * @returns
 */
const getDateByMouth = (m, y) => {
    if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
        return 31;
    } else if ([4, 6, 9, 11].includes(m)) {
        return 30;
    } else {
        return isLeapYear(y) ? 29 : 28;
    }
};
/**
 * 生成当前月份的天数数组
 * @param {*} d
 * @returns
 */
const renderCurrentMonthDay = d => {
    let days = [];
    for (let i = 0; i < d; i++) {
        days.push(i + 1);
    }
    return days;
};

export const renderDaysByYearAndMonth = (m, y) => {
    const tmp = getDateByMouth(m, y);
    return renderCurrentMonthDay(tmp);
};

export const getCurYearAndMonth = dateStr => {
    const tmp = new Date(dateStr || new Date());
    const y = tmp.getFullYear();
    const month = tmp.getMonth() + 1;
    const date = tmp.getDate();
    return {
        year: y,
        month: month,
        date: date,
    };
};

export const generatorMountDay = (m, y) => {
    let curDays = renderCurrentMonthDay(getDateByMouth(m, y)).map(c => {
        return { value: c, type: 0 };
    });
    const day = whichDay(`${y}-${m}-1`);
    const prevSize = day;
    let prevDays = [];
    if (m === 1) {
        prevDays = renderDaysByYearAndMonth(12, y - 1);
    } else {
        prevDays = renderDaysByYearAndMonth(m - 1, y);
    }
    prevDays = prevDays.splice(-prevSize, prevSize).map(c => {
        return { value: c, type: -1 };
    });

    const nextSize = 42 - curDays.length - prevSize;
    let nextDays = [];
    if (m === 12) {
        nextDays = renderDaysByYearAndMonth(1, y + 1);
    } else {
        nextDays = renderDaysByYearAndMonth(m + 1, y);
    }
    nextDays = nextDays.slice(0, nextSize).map(c => {
        return { value: c, type: 1 };
    });

    return [...prevDays, ...curDays, ...nextDays];
};
