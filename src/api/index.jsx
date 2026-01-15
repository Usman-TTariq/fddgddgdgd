import rawData from './data.json';

/**
 * Converts price and delPrice strings like "$750.00" or "800.00" into numbers
 */
const getData = () => {
  return rawData.map((item) => ({
    ...item,
    price: parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0,
    delPrice: parseFloat(String(item.delPrice).replace(/[^0-9.]/g, '')) || 0,
  }));
};

export default getData;
