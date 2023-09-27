//dashboard
const ageData = [
  {
    name: "10",
    Men: 4000,
    Women: 2400,
    amt: 2400,
  },
  {
    name: "20",
    Men: 3000,
    Women: 1398,
    amt: 2210,
  },
  {
    name: "30",
    Men: 2000,
    Women: 9800,
    amt: 2290,
  },
  {
    name: "40",
    Men: 2780,
    Women: 3908,
    amt: 2000,
  },
  {
    name: "50",
    Men: 1890,
    Women: 4800,
    amt: 2181,
  },
  {
    name: "60",
    Men: 2390,
    Women: 3800,
    amt: 2500,
  },
  {
    name: "70",
    Men: 3490,
    Women: 4300,
    amt: 2100,
  },
];

const menWomenBar = [
  {
    name: "10",
    Men: 4000,
    Women: 2400,
    amt: 2400,
  },
  {
    name: "20",
    Men: 3000,
    Women: 1398,
    amt: 2210,
  },
  {
    name: "30",
    Men: 2000,
    Women: 9800,
    amt: 2290,
  },
  {
    name: "40",
    Men: 2780,
    Women: 3908,
    amt: 2000,
  },
  {
    name: "50",
    Men: 1890,
    Women: 4800,
    amt: 2181,
  },
  {
    name: "60",
    Men: 2390,
    Women: 3800,
    amt: 2500,
  },
  {
    name: "70",
    Men: 3490,
    Women: 4300,
    amt: 2100,
  },
];
const topDealProducts = [
  {
    id: 1,
    img: "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5594.jpg",

    username: "Ladies T-Shirt-Grey",
    email: "women",
    amount: "3668",
  },
  {
    id: 2,
    img: "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5575.jpg",
    username: "Ladies Long Sleeve ",
    email: "women",
    amount: "3256",
  },
  {
    id: 3,
    img: "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5586.jpg",
    username: "Ladies Crop Blouse",
    email: "women",
    amount: "2998",
  },
  {
    id: 4,
    img: "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5534.jpg",
    username: "Gents Linen Shirt",
    email: "men",
    amount: "2512",
  },
  {
    id: 5,
    img: "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5596.jpg",
    username: "Ladies Office Dress ",
    email: "female",
    amount: "2134",
  },
  {
    id: 6,
    img: "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5574.jpg",
    username: "Ladies Long Sleeve",
    email: "women",
    amount: "1932",
  },
  {
    id: 7,
    img: "https://www.beverlystreet.lk/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/5/5/5576.jpg",
    username: "Ladies Crop Top",
    email: "women",
    amount: "1560",
  },
];

//want women
const chartBoxUser = {
  color: "#872323",
  icon: "https://img.icons8.com/ios/50/standing-woman.png",
  title: "Women",
  number: "111238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

//want men
const chartBoxProduct = {
  color: "#453AC8",
  icon: "https://img.icons8.com/ios/50/men-age-group-4.png",
  title: "Men",
  number: "23888",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

//want shoe
const chartBoxRevenue = {
  color: "#1c2866",
  icon: "https://img.icons8.com/windows/32/boots.png",
  title: "Shoe",
  number: "56432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

//want other
const chartBoxConversion = {
  color: "#9fab2e",
  icon: "https://img.icons8.com/fluency-systems-regular/48/tie.png",
  title: "Other",
  number: "2600",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};
//
const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3500,
    },
    {
      name: "Tue",
      profit: 3100,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1000,
    },
    {
      name: "Fri",
      profit: 390,
    },
    {
      name: "Sat",
      profit: 90,
    },
  ],
};
const pieData = [
  { name: "Women", value: 4000, color: "#80D9E6" },
  { name: "Men", value: 2000, color: "#83DBB1" },
  { name: "Shoe", value: 1900, color: "#DECE3B" },
  { name: "Other", value: 500, color: "#E77E7E" },
];
module.exports = {
  topDealProducts,
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  menWomenBar,
  ageData,
  pieData,
};
