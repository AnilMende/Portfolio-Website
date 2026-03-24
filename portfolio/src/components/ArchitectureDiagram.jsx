
import { useEffect, useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const ArchitectureDiagram = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 500);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Responsive Nodes
  const nodes = isMobile
    ? [
        { id: "1", position: { x: 50, y: 0 }, data: { label: "Client" } },
        { id: "2", position: { x: 50, y: 80 }, data: { label: "API Server" } },
        { id: "3", position: { x: 50, y: 160 }, data: { label: "Auth (JWT)" } },
        { id: "4", position: { x: 50, y: 240 }, data: { label: "Redis" } },
        { id: "5", position: { x: 50, y: 320 }, data: { label: "MongoDB" } },
        { id: "6", position: { x: 50, y: 400 }, data: { label: "Cloudinary" } },
      ]
    : [
        { id: "1", position: { x: 0, y: 100 }, data: { label: "Client (React)" } },
        { id: "2", position: { x: 200, y: 100 }, data: { label: "API Server" } },
        { id: "3", position: { x: 400, y: 20 }, data: { label: "Auth (JWT)" } },
        { id: "4", position: { x: 400, y: 100 }, data: { label: "Redis Cache" } },
        { id: "5", position: { x: 400, y: 180 }, data: { label: "MongoDB" } },
        { id: "6", position: { x: 600, y: 100 }, data: { label: "Cloudinary" } },
      ];

  // ✅ Edges (same for both)
  const edges = [
    { id: "e1", source: "1", target: "2" },
    { id: "e2", source: "2", target: "3" },
    { id: "e3", source: "2", target: "4" },
    { id: "e4", source: "2", target: "5" },
    { id: "e5", source: "2", target: "6" },
  ];

  return (
    <div
      className={`w-full ${
        isMobile ? "h-[400px]" : "h-[320px]"
      } bg-[#111] rounded-xl overflow-hidden`}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }}

        // 🔒 Disable interactions (clean UI)
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnDrag={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      />
    </div>
  );
};

export default ArchitectureDiagram;