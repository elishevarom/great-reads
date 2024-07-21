import React, { useEffect } from 'react';
import * as d3 from 'd3';

const ReviewerBarChart = ({ data }) => {
  useEffect(() => {
    const svg = d3.select('#reviewer-bar-chart');
    svg.selectAll('*').remove(); // Clear previous chart

    // Debug: Log the incoming data
    console.log('Raw data passed to ReviewerBarChart:', data);

    // Process data for the bar chart
    const processedData = data.reduce((acc, review) => {
      const bookTitle = review.bookTitle;
      const reviewer = review.reviewer; // Assuming review.reviewer contains the reviewer's name
      if (!acc[bookTitle]) {
        acc[bookTitle] = {};
      }
      if (!acc[bookTitle][reviewer]) {
        acc[bookTitle][reviewer] = 0;
      }
      acc[bookTitle][reviewer] += 1;
      return acc;
    }, {});

    // Debug: Log the processed data structure
    console.log('Processed Data Structure:', processedData);

    // Convert the processed data into a suitable format for D3
    const books = Object.keys(processedData);
    const reviewers = Array.from(new Set(data.map(d => d.reviewer)));

    const chartData = books.map(book => {
      const bookData = { bookTitle: book };
      reviewers.forEach(reviewer => {
        bookData[reviewer] = processedData[book][reviewer] || 0;
      });
      return bookData;
    });

    // Debug: Log the final data to be used in the chart
    console.log('Final chart data:', chartData);

    // Set chart dimensions
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 70, left: 40 };

    // Create scales
    const x0 = d3.scaleBand()
      .domain(chartData.map(d => d.bookTitle))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const x1 = d3.scaleBand()
      .domain(reviewers)
      .range([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3.scaleLinear()
      .domain([0, d3.max(chartData, d => d3.max(reviewers, key => d[key]))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const color = d3.scaleOrdinal()
      .domain(reviewers)
      .range(d3.schemeCategory10);

    // Create axes
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x0).tickSizeOuter(0))
      .selectAll("text")
      .attr("transform", "rotate(-40)")
      .style("text-anchor", "end");

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Create bars
    svg.append('g')
      .selectAll('g')
      .data(chartData)
      .enter().append('g')
      .attr('transform', d => `translate(${x0(d.bookTitle)},0)`)
      .selectAll('rect')
      .data(d => reviewers.map(key => ({ key, value: d[key] })))
      .enter().append('rect')
      .attr('x', d => x1(d.key))
      .attr('y', d => y(d.value))
      .attr('width', x1.bandwidth())
      .attr('height', d => y(0) - y(d.value))
      .attr('fill', d => color(d.key));

    // Add legend
    const legend = svg.append("g")
      .attr("transform", `translate(${width - margin.right - 100}, ${margin.top})`);

    legend.selectAll("rect")
      .data(reviewers)
      .enter().append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 20)
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", color);

    legend.selectAll("text")
      .data(reviewers)
      .enter().append("text")
      .attr("x", 24)
      .attr("y", (d, i) => i * 20 + 9)
      .attr("dy", "0.35em")
      .text(d => d);
  }, [data]);

  return (
    <svg id="reviewer-bar-chart" width="800" height="400"></svg>
  );
};

export default ReviewerBarChart;
