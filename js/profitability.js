/**
 * Created by Administrator on 2017/8/18 0018.
 */

/*盈利能力*/
var myChart = echarts.init(document.getElementById('echarts-wrapper-profitability'));
var data1 = ['2016-9-13', '2016-10-13', '2016-11-13', '2016-12-13', '2017-1-13', '2017-2-13', '2017-3-13','2017-4-13'];
var data3 = [93.3, 93.4, 93.5, 93.6, 93.45, 93.55, 93.4, 93.3];
var data4 = [-0.4, 0.5, 0.6, 0.9, 0.8, 0.75, 0.68, 0.92];
var option = {
    baseOption: {
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        grid: {
            left: '4%',
            top: '2%',
            bottom: '0%',
            width: "94%",
            containLabel: true
        },
        legend: {
            show: false,
            data: ['资产负债率', '速度比率']
        },
        xAxis: [
            {
                type: 'category',
                data: data1,
                axisPointer: {
                    type: 'line'
                },
//                坐标轴刻度标签的相关设置。
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: "#d1d1d1",
                        fontSize: 12
                    },
                    margin: 20
//                        interval:4
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                /*每股收益的y轴有刻度，但是没有轴线*/
                type: 'value',
                min: 93.2,
                max: 93.7,
                interval: 0.1,
                axisLabel: {
                    formatter: '{value}' + "%",
                    //刻度上的文字样式设置
                    textStyle: {
                        color: "#d1d1d1",
                        fontSize: 12
                    },
                    showMaxLabel: true,
                    showMinLabel: true
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
//                        interval: 1
                },
                splitLine: { //分割线
                    show: false
                }
            },
            {
                type: 'value',
                min: -1,
                max: 1.5,
                interval: 0.5,
                axisLabel: {
                    formatter: '{value}' + "%",
                    //刻度上的文字样式设置
                    textStyle: {
                        color: "#d1d1d1",
                        fontSize: 12
                    },
                    showMaxLabel: true,
                    showMinLabel: true
                },
                splitLine: { //分割线
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: ["#666"],
                        type: "dashed"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '速度比率',
                type: 'line',
                showAllSymbol: true,
                symbol: "circle",
                smooth: true,
                symbolSize: 6,
                yAxisIndex: 1,
                interval: 2,
                lineStyle: {   //折线线性渐变的颜色
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 1, color: '#FFC75E'},
                                {offset: 0, color: '#F03DA2'}
                            ]
                        ),
                        width: 2
                    }
                },
                itemStyle: { //折线圆点的颜色
                    normal: {
                        //'#F35298'
                        color: function (params) {
//                                console.log(params);
                            if (params.dataIndex % 2 === 0) {
                                return '#F35298'
                            } else if (params.dataIndex === data4.length - 1) {
                                return "#F35298"
                            } else {
                                return "transparent"
                            }
                        }
                    }
                },
                data: data4
            },
            {
                name: '资产负债率',
                type: 'bar',
                barWidth: 10,
                boundaryGap: false,
                data: data3,
//                    barCategoryGap: 5,
                //柱状图的颜色渐变
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 1, color: '#5460F9'},
                                {offset: 0, color: '#ADD3F1'}
                            ]
                        ),
                        barBorderRadius: 5
                    }
                }
            }
        ]
    }

};
myChart.setOption(option);
