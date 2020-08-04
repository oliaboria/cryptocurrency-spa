const getMarketPair = (name: string): string => name.replace(/.+:/, '');

export default getMarketPair;
