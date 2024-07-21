import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GenrePieChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!data || !chartRef.current) return;

    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.genre))
      .range(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.value)(data);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    // Add arcs
    svg.selectAll('path')
      .data(pie)
      .enter().append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.genre))
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .on('mouseover', function (event, d) {
        d3.select(this).attr('opacity', 0.7);
        tooltip.transition()
          .duration(200)
          .style('opacity', .9);
        tooltip.html(`<strong>${d.data.genre}</strong><br/>Count: ${d.data.value}`)
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY - 10}px`);
      })
      .on('mouseout', function () {
        d3.select(this).attr('opacity', 1);
        tooltip.transition()
          .duration(500)
          .style('opacity', 0);
      });

    // Tooltip element
    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip bg-dark text-white p-2 rounded')
      .style('opacity', 0)
      .style('position', 'absolute');

  }, [data]);

  return (
    <div className="d-flex justify-content-center">
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default GenrePieChart;
