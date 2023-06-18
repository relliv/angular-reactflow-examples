import React, { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data, isConnectable }: any) => {
  const fields = [
    {
      id: "1",
      icon: "+",
      name: "field_name 1",
      type: "field_type",
    },
    {
      id: "2",
      icon: "+",
      name: "field_name 2",
      type: "field_type",
    },
    {
      id: "3",
      icon: "+",
      name: "field_name 3",
      type: "field_type",
    },
    {
      id: "4",
      icon: "+",
      name: "field_name 4",
      type: "field_type",
    },
    {
      id: "5",
      icon: "+",
      name: "field_name 5",
      type: "field_type",
    },
    {
      id: "6",
      icon: "+",
      name: "field_name 6",
      type: "field_type",
    },
  ];

  return (
    <div className="erd-entity">
      {/* Header */}
      <div className="header">table_name_name_name</div>

      {/* Body */}
      <div className="body">
        {fields.map((field, index) => (
          <div className="field" key={index}>
            {/* Left Handle */}
            <Handle
              id={field.id}
              type="target"
              position={Position.Left}
              style={{ background: "#555" }}
              onConnect={(params) => console.log("handle onConnect", params)}
              isConnectable={isConnectable}
            />

            {/* Icon */}
            <div className="field-icon">{field.icon}</div>

            {/* Name */}
            <div className="field-name">{field.name}</div>

            {/* Type */}
            <div className="field-type">{field.type}</div>

            {/* Right Handle */}
            <Handle
              id={field.id}
              type="source"
              position={Position.Right}
              isConnectable={isConnectable}
            />
          </div>
        ))}
      </div>
    </div>
  );
});
