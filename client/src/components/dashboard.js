import React, { useState, useRef, useEffect } from "react";
import { Pie, Line as LineChart, Chart } from "react-chartjs-2";
import createReactClass from "create-react-class";

const uiDataCountries = [
  {
    country: "US",
    percent: 65,
  },
  {
    country: "India",
    percent: 15,
  },
  {
    country: "UK",
    percent: 10,
  },
  {
    country: "Canada",
    percent: 8,
  },
  {
    country: "Russia",
    percent: 5,
  },
  {
    country: "Mexico",
    percent: 20,
  },
  {
    country: "France",
    percent: 30,
  },
];

const uiDataPageViews = [
  {
    page: "/ (Logged out)",
    views: 3929481,
  },
  {
    page: "/ (Logged in)",
    views: 1143393,
  },
  {
    page: "/tour",
    views: 999888,
  },
  {
    page: "/page",
    views: 1999888,
  },
  {
    page: "/contact",
    views: 1599888,
  },
  {
    page: "/about",
    views: 1329888,
  },
  {
    page: "/homes",
    views: 329888,
  },
];

const UIDashboard = () => {
  const [traffic, setTraffic] = useState({
    id: "traffic",
    new: 80,
    returning: 50,
  });
  const [profit, setProfit] = useState({
    id: "profit",
    new: 100,
    returning: 25,
  });
  const [revenue, setRevenue] = useState({
    id: "revenue",
    new: 300,
    returning: 1500,
  });

  return (
    <div className="container">
      <div className="row pie__chart-wrapper">
        <PieChart
          title="Traffic"
          new={traffic.new}
          returning={traffic.returning}
          id={traffic.id}
        />
        <PieChart
          title="Profit"
          new={profit.new}
          returning={profit.returning}
          id={profit.id}
        />
        <PieChart
          title="Revenue"
          new={revenue.new}
          returning={revenue.returning}
          id={revenue.id}
        />
      </div>
      <div className="row line__chart-wrapper">
        <LineChart
          id="test-1"
          chartSpeed={4250}
          bgColor="#1BC98E"
          title="Page Views"
        />
        <LineChart
          id="test-2"
          chartSpeed={6100}
          bgColor="#E64759"
          title="Downloads"
        />
        <LineChart
          id="test-3"
          chartSpeed={4900}
          bgColor="#9F86FF"
          title="Sign-Ups"
        />
        <LineChart
          id="test-4"
          chartSpeed={3200}
          bgColor="#E4D836"
          title="Downloads"
        />
      </div>
      <div className="row leaderboards">
        <LeaderBoard
          data={uiDataCountries}
          sortAsc={true}
          title="Countries"
          dataSort="percent"
          dataTitle="country"
        />
        <LeaderBoard
          data={uiDataPageViews}
          sortAsc={false}
          title="Most Visited Pages"
          dataSort="views"
          dataTitle="page"
          numberComma={true}
        />
      </div>
    </div>
  );
};

const PieChart = ({ title, new: newProp, returning, id }) => {
  const canvasRef = useRef(null);
  const [animationTime, setAnimationTime] = useState(500);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const data = {
      labels: ["New", "Returning"],
      datasets: [
        {
          data: [10, 20], // your data here
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    };

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        cutoutPercentage: 80,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true,
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        // add labels property with an array of label strings
        labels: ["New", "Returning"],
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [newProp, returning]);

  return (
    <div className="col-md-4">
      <div className="pie__chart">
        <canvas ref={canvasRef} id={id} width="400" height="400"></canvas>
      </div>
      <div className="text-center">
        <strong>{title}</strong>
      </div>
      <h4 className="text-center">
        {newProp} vs. {returning}
      </h4>
    </div>
  );
};

let LeaderBoard = createReactClass({
  sortData: function () {
    let sortOrder = this.props.sortAsc ? 1 : -1;
    let dataSort = this.props.dataSort;
    let newData = this.props.data.sort(function (a, b) {
      if (a[dataSort] < b[dataSort]) return -1 * sortOrder;
      if (a[dataSort] > b[dataSort]) return 1 * sortOrder;
      return 0;
    });
    return newData;
  },
  formatNumber: function (number) {
    if (this.props.numberComma) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return number;
    }
  },
  render: function () {
    let data = this.sortData();
    let title = this.props.title;
    let dataTitle = this.props.dataTitle;
    let numberComma = this.props.numberComma;
    let listItems = data.map(function (item, index) {
      let number = item[dataTitle];
      if (numberComma) {
        number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      return (
        <li key={index}>
          <span>{item[dataTitle]}</span>
          <span>{number}</span>
        </li>
      );
    });
    return (
      <div className="col-md-6">
        <div className="leaderboard">
          <h2>{title}</h2>
          <ul>{listItems}</ul>
        </div>
      </div>
    );
  },
});

export default UIDashboard;
