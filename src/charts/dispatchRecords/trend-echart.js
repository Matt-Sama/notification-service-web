const option = {
  title:{
    text: '发送量走势',
    show: true
  },
  legend: {
    data: ['短信', '邮件'],
    icon: "roundRect",
  },
  grid:{
    top: "25%",
    left:"5%",
    right: "5%",
    bottom: "10%"
  },
  xAxis: {
    type: 'category',
    name: '小时',
    boundaryGap: false,
    data: ['02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00','16:00','18:00','20:00','22:00','24:00']
  },
  yAxis: {
    type: 'value',
    name: '条数'
  },
  series: [
    {
      name: '短信',
      data: [456, 776, 654, 934, 345, 1330, 1320,1111,2345,555,987,765],
      type: 'line',
      areaStyle: {},
      smooth: true
    },
    {
      name: '邮件',
      data: [456, 776, 654, 934, 345, 1330, 421,123,2345,555,987,765].reverse(),
      type: 'line',
      areaStyle: {},
      smooth: true
    }
  ]
}

export default option