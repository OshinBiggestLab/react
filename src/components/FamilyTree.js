import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const familyData = {
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
    svg.selectAll("*").remove(); // Clear previous drawing

    const width = 1000;
    const height = 600;

    const root = d3.hierarchy(familyData);
    const treeLayout = d3.tree().size([300, 200]); // [width - 100, height - 100] is used to adjust the lines
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
      .selectAll("g") // Select all groups (g) for nodes
      .data(root.descendants()) //
      .enter()
      .append("g") // Create a group for each node
      .attr("transform", (d) => `translate(${d.x + 50}, ${d.y + 50})`); // node position adjustment

    // Do SVG (in D3) only have 3 basic math-style container shapes
    // rect, circle, and ellipse

    nodes // for shape of containers [rect, circle, ellipse]
      .append("rect")
      .attr("x", -40)
      .attr("y", -20)
      .attr("width", 80)
      .attr("height", 40)
      .attr("rx", 10) // rounded corners
      .attr("fill", "purple");

    nodes
      .append("text")
      .text((d) => d.data.name)
      .attr("text-anchor", "middle")
      .attr("dy", 4)
      .style("fill", "white")
      .style("font-size", "12px");
  }, []);

  return (
    <section className="w-full h-fit overflow-auto flex flex-col items-center justify-center">
      <h1 className="font-bold mb-4 text-xl text-center">
        FIRST TIME WITH D3 JS LIBRARY
      </h1>
      <svg
        ref={ref}
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMidYMid meet"
        className="w-full flex flex-col items-center justify-center bg-blue-200"
      ></svg>
    </section>
  );
};

export default FamilyTree;
