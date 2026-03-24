import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
    { id: "1", position: { x: 0, y: 100 }, data: { label: "Client (React)" } },
    { id: "2", position: { x: 200, y: 100 }, data: { label: "API Server (Node.js)" } },
    { id: "3", position: { x: 400, y: 20 }, data: { label: "Auth (JWT)" } },
    { id: "4", position: { x: 400, y: 100 }, data: { label: "Redis Cache" } },
    { id: "5", position: { x: 400, y: 180 }, data: { label: "MongoDB" } },
    { id: "6", position: { x: 600, y: 100 }, data: { label: "Cloudinary" } },
];

const edges = [
    { id: "e1", source: "1", target: "2" },
    { id: "e2", source: "2", target: "3" },
    { id: "e3", source: "2", target: "4" },
    { id: "e4", source: "2", target: "5" },
    { id: "e5", source: "2", target: "6" },
];


const ArchitectureDiagram = () => {
    return (
        <div className="h-75 w-full bg-[#111] rounded-xl overflow-hidden">

            <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                proOptions={{ hideAttribution: true }}  // removes branding
                zoomOnScroll={false}
                zoomOnPinch={false}
                panOnDrag={false}
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
            >
            </ReactFlow>

        </div>
    )
}

export default ArchitectureDiagram;