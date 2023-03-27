import "./Chart.css";
import ChartBar from "./ChartBar";
  const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map((dataPoint)=>{
      return (
        dataPoint.value
      )
    })
  const totalMaximum = Math.max(...dataPointsValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          key={dataPoint.label}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
