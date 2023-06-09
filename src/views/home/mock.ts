export let mockCarData = [
  {
    // 车辆ID
    carId: "111111111",
    // 车牌号
    plateNumber: "渝A12345",
    // 车辆状态
    carState: false,
    // 运营状态
    operatorState: false,
    // 里程数
    odometer: 231,
    // 实时车流量
    realTimePassenger: 324,
    // 经度
    lng:107.38927,
    // 纬度
    lat:29.71314
  },
  {
    carId: "22222222",
    plateNumber: "渝A12345",
    carState: false,
    operatorState: false,
    odometer: 231,
    realTimePassenger: 324,
    lng:107.36247,
    lat:29.71537
  },
  {
    carId: "33333333",
    plateNumber: "渝A12345",
    carState: true,
    operatorState: true,
    odometer: 11111,
    realTimePassenger: 3232324,
    lng:107.38748,
    lat:29.75610
  },
  {
    carId: "33333333",
    plateNumber: "渝A12345",
    carState: true,
    operatorState: true,
    odometer: 11111,
    realTimePassenger: 3232324,
    lng:107.32748,
    lat:29.70610
  },
  {
    carId: "33333333",
    plateNumber: "渝A12345",
    carState: true,
    operatorState: true,
    odometer: 11111,
    realTimePassenger: 3232324,
    lng:107.34748,
    lat:29.75610
  },
  {
    carId: "33333333",
    plateNumber: "渝A12385",
    carState: true,
    operatorState: true,
    odometer: 23222,
    realTimePassenger: 2332,
    lng:107.34748,
    lat:29.70610
  },
  {
    carId: "33333333",
    plateNumber: "渝B12385",
    carState: false,
    operatorState: true,
    odometer: 23222,
    realTimePassenger: 2332,
    lng:107.38748,
    lat:29.79610
  },
  {
    carId: "33333333",
    plateNumber: "渝ABCDEF",
    carState: true,
    operatorState: true,
    odometer: 9999,
    realTimePassenger: 9999,
    lng:107.40748,
    lat:29.80610
  }
]
// for (let i = 0; i < 1000; i++) {
//   mockCarData.push({
//     carId:'11111',
//     plateNumber:"渝Abcedf",
//     carState:i % 2 == 0 ? true : false,
//     operatorState:true,
//     odometer:i,
//     realTimePassenger:i*2,
//     lng:Math.random() * (108 - 107) + 107,
//     lat:Math.random() * (30 - 29) + 29,
//   })
// }