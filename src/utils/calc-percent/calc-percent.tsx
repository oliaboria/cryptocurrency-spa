const calcPercent = (value: number): string => {
    const percent = (value * 10).toFixed(2);

    return `${percent} %`;
};

export default calcPercent;
