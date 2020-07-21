import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Chart } from "react-charts";

const App = () => {
  const [data, setData] = useState();
  const [tableData, setTableData] = useState();
  useEffect(() => {
    Axios.get("https://api.covid19india.org/data.json")
      .then((res) => {
        console.log(res);
        setData(res.data.cases_time_series);
        setTableData(res.data.statewise);
      })
      .then((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    data &&
      data.map((d) => {
        dataPoints.push({
          x: d.date,
          y: d.dailyconfirmed,
        });
      });
  }, [data]);

  const dataPoints = [];

  const options = {
    theme: "light2",
    title: {
      text: "Covid India Chart",
    },
    axisY: {
      title: "Cases",
      includeZero: false,
    },
    data: [
      {
        type: "line",
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0.00",
        dataPoints: dataPoints,
      },
    ],
  };

  return (
    <div className="container-fluid APP">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <h1 className="display-4 text-center mt-3 mb-5">
            {" "}
            Covid-19 Tracker India{" "}
          </h1>
          <div className="cardStack">
            {/*  -----------Card---------------- */}
            <div className="card">
              <div className="card-body">
                <h1 className=" text-center text-danger  ">Total cases</h1>
                <h1 className="display-5 text-center text-danger  ">
                  {data && data[data.length - 1].totalconfirmed}
                </h1>
              </div>
            </div>
            {/*  -----------Card---------------- */}
            {/*  -----------Card---------------- */}
            <div className="card">
              <div className="card-body">
                <h1 className=" text-center text-danger  ">Total Recovered</h1>
                <h1 className="display-5 text-center text-danger  ">
                  {data && data[data.length - 1].totalrecovered}
                </h1>
              </div>
            </div>
            {/*  -----------Card---------------- */}
            {/*  -----------Card---------------- */}
            <div className="card">
              <div className="card-body">
                <h1 className=" text-center text-danger  ">Total Deceased</h1>
                <h1 className="display-5 text-center text-danger  ">
                  {data && data[data.length - 1].totaldeceased}
                </h1>
              </div>
            </div>
            {/*  -----------Card---------------- */}
          </div>

          <table className="table table-dark m-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">State</th>
                <th scope="col">Confirmed</th>
                <th scope="col">Active</th>
                <th scope="col">Death</th>
                <th scope="col">Recovered</th>
              </tr>
            </thead>
            <tbody>
              {tableData &&
                tableData.map((d, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{d.state}</td>
                    <td>{d.confirmed}</td>
                    <td>{d.active}</td>
                    <td>{d.deaths}</td>
                    <td>{d.recovered}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
