import React, { useEffect } from 'react';
import * as d3 from 'd3';

const RatingBarChart = ({ data }) => {
  useEffect(() => {
    const svg = d3.select('#rating-bar-chart');
    svg.selectAll('*').remove(); // Clear previous chart

    // Process data for the bar chart
    const processedData = data.map(book => ({
      bookTitle: book.pk, // Assuming 'pk' is the book title identifier
      averageRating: book.rating, // Assuming 'rating' is the book's rating attribute
    }));

    // Log processed data for debugging
    console.log('Processed Data for Bar Chart:', processedData);

    // Set chart dimensions
    const width = 600; // Increased width for better text visibility
    const height = 200;
    const margin = { top: 20, right: 30, bottom: 60, left: 60 }; // Increased left margin

    // Create scales
    const x = d3.scaleBand()
      .domain(processedData.map(d => d.bookTitle))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, 5]) // Assuming ratings are between 0 and 5
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Create axes
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-0.8em')
      .attr('dy', '0.15em')
      .attr('transform', 'rotate(-45)'); // Rotate axis text by -45 degrees

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Create bars
    svg.selectAll('.bar')
      .data(processedData)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.bookTitle))
      .attr('y', d => y(d.averageRating))
      .attr('width', x.bandwidth())
      .attr('height', d => y(0) - y(d.averageRating))
      .attr('fill', 'steelblue');
  }, [data]);

  return (
    <svg id="rating-bar-chart" width="600" height="300"></svg>
  );
};

export default RatingBarChart;
