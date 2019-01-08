module.exports = [
  {
    path: '/macroscopicAnalysis',
    index: '1',
    name: '宏观分析',
    hidden: false,
    children: [
      {
        path: '/',
        index: '1-0',
        name: 'Index',
        hidden: true
      },
      {
        index: '1-1',
        path: '/macroscopicAnalysis/annualIndicators',
        name: '年度经济指标总览',
        hidden: false
      },
      {
        index: '1-2',
        path: '/macroscopicAnalysis/monthlyIndicators',
        name: '月度经济指标总览',
        hidden: false
      }
    ]
  },
  {
    path: '/regionalAnalysis',
    index: '2',
    name: '区域分析',
    hidden: false,
    children: [
      {
        index: '2-1',
        path: '/regionalAnalysis/office',
        name: 'office',
        hidden: false
      },
      {
        index: '2-2',
        path: '/regionalAnalysis/park',
        name: 'park',
        hidden: false
      },
      {
        index: '2-3',
        path: '/regionalAnalysis/district',
        name: 'district',
        hidden: false
      }
    ]
  }
]
