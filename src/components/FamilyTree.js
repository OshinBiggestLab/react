import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = {
  name: "Grandparent",
  children: [
    {
      name: "Parent",
      children: [{ name: "You" }, { name: "Sibling" }],
    },
  ],
};

const FamilyTree = () => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // Clear old drawing

    const width = 600;
    const height = 400;

    const root = d3.hierarchy(data);
    const treeLayout = d3.tree().size([width - 100, height - 100]);
    treeLayout(root);

    // Draw links
    svg
      .selectAll("line")
      .data(root.links())
      .enter()
      .append("line")
      .attr("x1", (d) => d.source.x + 50)
      .attr("y1", (d) => d.source.y + 50)
      .attr("x2", (d) => d.target.x + 50)
      .attr("y2", (d) => d.target.y + 50)
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2);

    // Draw nodes
    const nodes = svg
      .selectAll("g")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${d.x + 50}, ${d.y + 50})`);

    nodes.append("circle").attr("r", 20).attr("fill", "#69b3a2");

    nodes
      .append("text")
      .attr("dy", 4)
      .attr("x", 25)
      .text((d) => d.data.name);
  }, []);

  return (
    <section className=" flex flex">
      <h1 className="font-bold">FIRST TIME WITH D3 JS LIBRARY</h1>
      <svg ref={ref} width={600} height={400}></svg>
    </section>
  );
};

export default FamilyTree;
