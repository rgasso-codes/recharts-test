import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line, LabelList
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 2400,
    pv: 1900,
    amt: 2400,
    test: 2000,
    topBar: "test 1",
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
    test: 3010,
    topBar: "test 2",
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 7800,
    amt: 2290,
    test: 6400,
    topBar: "test 3",
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
    test: 3010,
    topBar: "test 4",
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
    test: 1000,
    topBar: "test 5",
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
    test: 2000,
    topBar: "test 6",
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
    test: 2550,
    topBar: "test 7",
  },
];

export default class ComposedRechart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <section style={{width: "100%", height: "100%"}}>
        <div style={{width: "1000px", height: "400px"}}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 15,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barGap="-40"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />}>
                <LabelList dataKey="topBar" position="top" />
              </Bar>
              <Line type="monotone" dataKey="test" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </section>
    );
  }
}