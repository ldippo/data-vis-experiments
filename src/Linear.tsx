import React from "react";
import d3 from "d3";

const Linear = ({ domain, range }) => {
  const linearScale = d3
    .scaleLinear()
    .domain(domain)
    .range(range);
};
