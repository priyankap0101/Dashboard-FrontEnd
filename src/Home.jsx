/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  AreaChart,
  Area,
} from "recharts";


function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeChart, setActiveChart] = useState("Intensity"); // Default active chart
  const [endYear, setEndYear] = useState(""); // State variable for end year filter
  // const [topics, setTopics] = useState([]); // State variable for topics filter
  const [sector, setSector] = useState(""); // State variable for sector filter
  const [region, setRegion] = useState(""); // State variable for region filter
  const [pest, setPest] = useState(""); // State variable for PEST filter
  const [source, setSource] = useState(""); // State variable for source filter
  const [swot, setSwot] = useState(""); // State variable for SWOT filter
  const [country, setCountry] = useState(""); // State variable for country filter
  const [city, setCity] = useState(""); // State variable for city filter
  const [yearData, setYearData] = useState([]); // State variable for year chart data
  const [topicsData, setTopicsData] = useState([]); // State variable for topics chart data
  const [sectorData, setSectorData] = useState([]); // State variable for sector chart data
  const [regionData, setRegionData] = useState([]); // State variable for region chart data
  const [pestData, setPestData] = useState([]); // State variable for PEST chart data
  const [sourceData, setSourceData] = useState([]); // State variable for source chart data
  const [swotData, setSwotData] = useState([]); // State variable for SWOT chart data
  const [countryData, setCountryData] = useState([]); // State variable for country chart data
  const [cityData, setCityData] = useState([]); // State variable for city chart data
  const [dynamicYears, setDynamicYears] = useState([]); // State variable for dynamic years
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetchData(); // Initial data fetch
    const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(interval); // Cleanup function to clear interval
  }, []);

  useEffect(() => {
    applyFilters();
  }, [
    data,
    endYear,
    topics,
    sector,
    region,
    pest,
    source,
    swot,
    country,
    city,
  ]);

  useEffect(() => {
    // Generate dynamic years
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear - i);
    setDynamicYears(years);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/data");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchTopics(); // Fetch topics data when the component mounts
  }, []);

  const fetchTopics = async () => {
    try {
      // Fetch topics data from your API endpoint
      const response = await axios.get("http://localhost:8080/api/topic");
      setTopics(response.data); // Update the topics state with the fetched data
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };
  const applyFilters = () => {
    let filtered = data;
    // Apply filters based on selected values
    if (endYear !== "") {
      filtered = filtered.filter((item) => item.year <= endYear);
    }
    // Apply other filters similarly

    setFilteredData(filtered);
    updateCharts(filtered);
  };

  const updateCharts = (filteredData) => {
    // Update data for each chart based on filtered data
    updateYearChart(filteredData);
    updateTopicsChart(filteredData);
    updateSectorChart(filteredData);
    updateRegionChart(filteredData);
    updatePestChart(filteredData);
    updateSourceChart(filteredData);
    updateSwotChart(filteredData);
    updateCountryChart(filteredData);
    updateCityChart(filteredData);
  };

  const updateYearChart = (filteredData) => {
    // Process data for year chart
    // Example: Group data by year and calculate intensity average for each year
    const yearChartData = [];
    filteredData.forEach((item) => {
      const existingYearData = yearChartData.find(
        (data) => data.year === item.year
      );
      if (existingYearData) {
        existingYearData.totalIntensity += item.intensity;
        existingYearData.count++;
      } else {
        yearChartData.push({
          year: item.year,
          totalIntensity: item.intensity,
          count: 1,
        });
      }
    });
    const formattedYearData = yearChartData.map((data) => ({
      year: data.year,
      averageIntensity: data.totalIntensity / data.count,
    }));
    setYearData(formattedYearData);
  };

  const updateTopicsChart = (filteredData) => {
    // Process data for topics chart
    // Example: Group data by topics and calculate intensity average for each topic
    const topicsChartData = [];
    filteredData.forEach((item) => {
      const existingTopicsData = topicsChartData.find(
        (data) => data.topic === item.topic
      );
      if (existingTopicsData) {
        existingTopicsData.totalIntensity += item.intensity;
        existingTopicsData.count++;
      } else {
        topicsChartData.push({
          topic: item.topic,
          totalIntensity: item.intensity,
          count: 1,
        });
      }
    });
    const formattedTopicsData = topicsChartData.map((data) => ({
      topic: data.topic,
      averageIntensity: data.totalIntensity / data.count,
    }));
    setTopicsData(formattedTopicsData);
  };

  const updateSectorChart = (filteredData) => {
    // Process data for sector chart
    // Example: Group data by sector and calculate intensity average for each sector
    const sectorChartData = [];
    filteredData.forEach((item) => {
      const existingSectorData = sectorChartData.find(
        (data) => data.sector === item.sector
      );
      if (existingSectorData) {
        existingSectorData.totalIntensity += item.intensity;
        existingSectorData.count++;
      } else {
        sectorChartData.push({
          sector: item.sector,
          totalIntensity: item.intensity,
          count: 1,
        });
      }
    });
    const formattedSectorData = sectorChartData.map((data) => ({
      sector: data.sector,
      averageIntensity: data.totalIntensity / data.count,
    }));
    setSectorData(formattedSectorData);
  };

  const updateRegionChart = (filteredData) => {
    // Process data for region chart
    // Example: Group data by region and calculate intensity average for each region
    const regionChartData = [];
    filteredData.forEach((item) => {
      const existingRegionData = regionChartData.find(
        (data) => data.region === item.region
      );
      if (existingRegionData) {
        existingRegionData.totalIntensity += item.intensity;
        existingRegionData.count++;
      } else {
        regionChartData.push({
          region: item.region,
          totalIntensity: item.intensity,
          count: 1,
        });
      }
    });
    const formattedRegionData = regionChartData.map((data) => ({
      region: data.region,
      averageIntensity: data.totalIntensity / data.count,
    }));
    setRegionData(formattedRegionData);
  };

  const updatePestChart = (filteredData) => {
    // Process data for PEST chart
    // Example: Group data by PEST and calculate intensity average for each PEST factor
    const pestChartData = [];
    filteredData.forEach((item) => {
      const existingPestData = pestChartData.find(
        (data) => data.pest === item.pest
      );
      if (existingPestData) {
        existingPestData.totalIntensity += item.intensity;
        existingPestData.count++;
      } else {
        pestChartData.push({
          pest: item.pest,
          totalIntensity: item.intensity,
          count: 1,
        });
      }
    });
    const formattedPestData = pestChartData.map((data) => ({
      pest: data.pest,
      averageIntensity: data.totalIntensity / data.count,
    }));
    setPestData(formattedPestData); // Set pestChartData state variable
  };

  const updateSourceChart = (filteredData) => {
    // Process data for Source chart
    // Example: Group data by Source and calculate intensity average for each Source
    const sourceChartData = [];
    filteredData.forEach((item) => {
      const existingSourceData = sourceChartData.find(
        (data) => data.source === item.source
      );
      if (existingSourceData) {
        existingSourceData.totalIntensity += item.intensity;
        existingSourceData.count++;
      } else {
        sourceChartData.push({
          source: item.source,
          totalIntensity: item.intensity,
          count: 1,
        });
      }
    });
    const formattedSourceData = sourceChartData.map((data) => ({
      source: data.source,
      averageIntensity: data.totalIntensity / data.count,
    }));
    setSourceData(formattedSourceData); // Set sourceChartData state variable
  };

  const updateSwotChart = (filteredData) => {
    // Process data for SWOT chart
    // Example: Group data by SWOT and calculate intensity average for each SWOT factor
    const swotChartData = [];
    filteredData.forEach((item) => {
      const existingSwotData = swotChartData.find(
        (data) => data.swot === item.swot
      );
      if (existingSwotData) {
        existingSwotData.totalIntensity += item.intensity;
        existingSwotData.count++;
      } else {
        swotChartData.push({
          swot: item.swot,
          totalIntensity: item.intensity,
          count: 1,
        });
      }
    });
    const formattedSwotData = swotChartData.map((data) => ({
      swot: data.swot,
      averageIntensity: data.totalIntensity / data.count,
    }));
    setSwotData(formattedSwotData); // Set swotChartData state variable
  };

  const updateCountryChart = (filteredData) => {
    // Process data for Country chart
    // Example: Group data by Country and calculate intensity average for each Country
    const countryChartData = [];
    filteredData.forEach((item) => {
      const existingCountryData = countryChartData.find(
        (data) => data.country === item.country
      );
      if (existingCountryData) {
        existingCountryData.totalIntensity += item.intensity;
        existingCountryData.count++;
      } else {
        countryChartData.push({
          country: item.country,
          totalIntensity: item.intensity,
          count: 1,
        });
      }
    });
    const formattedCountryData = countryChartData.map((data) => ({
      country: data.country,
      averageIntensity: data.totalIntensity / data.count,
    }));
    setCountryData(formattedCountryData); // Set countryChartData state variable
  };

  const updateCityChart = (filteredData) => {
    // Process data for City chart
    // Example: Group data by City and calculate intensity average for each City
    const cityChartData = [];
    filteredData.forEach((item) => {
      const existingCityData = cityChartData.find(
        (data) => data.city === item.city
      );
      if (existingCityData) {
        existingCityData.totalIntensity += item.intensity;
        existingCityData.count++;
      } else {
        cityChartData.push({
          city: item.city,
          totalIntensity: item.intensity,
          count: 1,
        });
      }
    });
    const formattedCityData = cityChartData.map((data) => ({
      city: data.city,
      averageIntensity: data.totalIntensity / data.count,
    }));
    setCityData(formattedCityData); // Set cityChartData state variable
  };
//   const statistics = [
//     { title: "Revenue Status", value: "$10,000" },
//     { title: "Page Views", value: "1000" },
//     { title: "Bounce Rate", value: "25%" },
   
//     { title: "New Users", value: "500" },
//     { title: "Conversion Rate", value: "10%" },
    
// ];
  const renderChart = () => {
    // Render chart based on active chart
    switch (activeChart) {
      case "Intensity":
        return (
          <div className="chart-container ml-0 mr-48 mt-4">
            <h2 className="chart-title mb-5">Intensity Chart</h2>
            <div className="chart">
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="title" />
                  <YAxis dataKey="intensity" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",width: "100%",height: "auto",
                      borderRadius: 8,
                    }}
                  />
                  <Legend />
                  <Bar dataKey="intensity" fill="#3498DB" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      case "Likelihood":
        return (
          <div className="chart-container ml-0 mr-48 mt-4">
            <h2 className="chart-title mb-5">Likelihood Chart</h2>
            <div className="chart">
              <ResponsiveContainer width="100%" height={500}>
                <LineChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="title" />
                  <YAxis dataKey="likelihood" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: 8,
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="likelihood" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      case "Relevance":
        return (
          <div className="chart-container ml-0 mr-48 mt-4">
            <h2 className="chart-title mb-5">Relevance Chart</h2>
            <div className="chart">
              <ResponsiveContainer width="100%" height={500}>
                <AreaChart data={filteredData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="title" />
                  <YAxis dataKey="relevance" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: 8,
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="relevance"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      case "Year":
        return (
          <div className="chart-container ml-0 mr-48 mt-4">
            <h2 className="chart-title mb-5" >Year Chart</h2>
            <div className="chart">
              <ResponsiveContainer width="100%" height={500}>
                <LineChart data={yearData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis dataKey="averageIntensity" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: 8,
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="averageIntensity"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      case "Topics":
        return (
          <div className="chart-container ml-0 mr-48 mt-4">
            <h2 className="chart-title mb-5">Topic Chart</h2>
            <div className="chart">
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={topicsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="topic" />
                  <YAxis dataKey="averageIntensity" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: 8,
                    }}
                  />
                  <Legend />
                  <Bar dataKey="averageIntensity" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      // Add cases for other charts
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        

        {/* Filter section */}
        <div className="bg-gray-100 p-6 rounded-lg max-h-fit w-300">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">Filters</h2>
          {/* End Year Filter */}
          {/* Chart selection */}
          <div className="mb-4">
            <label htmlFor="chartSelect" className="text-teal-700 block text-lg font-bold  w-50">
              Select Chart
            </label>
            <select
              id="chartSelect"
              name="chartSelect"
              value={activeChart}
              onChange={(e) => setActiveChart(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="Intensity">Intensity</option>
              <option value="Likelihood">Likelihood</option>
              <option value="Relevance">Relevance</option>
              <option value="Year">Year</option>
              <option value="Topics">Topics</option>
              {/* Add other options */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="endYear" className="text-teal-700 block text-lg font-bold  w-50">
             Select End Year
            </label>
            <select
              id="endYear"
              name="endYear"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select an end year...</option>
              {/* Map over the dynamic years and generate options */}
              {dynamicYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

        
         
        </div>
        {/* Chart section */}
        <div className="md:col-span-1">
          
          {/* active chart */}
          {renderChart()}
        </div>
         
      </div>
    </div>
  );
}

export default Home;
