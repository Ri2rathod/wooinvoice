import { TextIcon, ImageIcon, FileTextIcon , TableIcon , DividerHorizontalIcon, StarIcon ,CodeIcon, Link2Icon ,AlignLeftIcon, DragHandleVerticalIcon} from '@radix-ui/react-icons'
import React from 'react'
import useDashboardBuilderStore from '../state/dashboardBuilderStore';

export default function Blocks() {
  const { startDraggingNewWidget } = useDashboardBuilderStore();

  const icons = [
    {type: 'text',label: "Text", icon: <TextIcon className="text-white h-8 w-8" /> },
    {type: 'image',label: "Image", icon: <ImageIcon className="text-white h-8 w-8" /> },
    {type: 'chart',label: "Woocommerce Fields", icon: <FileTextIcon className="text-white h-8 w-8" /> },
    {type: 'table',label: "Invoice Detail", icon: <TableIcon className="text-white h-8 w-8" /> },
    {type: 'metric',label: "Separator", icon: <DividerHorizontalIcon className="text-white h-8 w-8" /> },
  ];

  // Handle the drag start event
  const handleDragStart = (e, widgetType) => {
    e.dataTransfer.setData('widgetType', widgetType);
    startDraggingNewWidget(widgetType);
  };

  return (
    <div className="p-4  rounded-lg ">
      <div className="grid grid-cols-2 gap-4">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col py-2  items-center justify-center  rounded-lg shadow-md hover:bg-gray-600 cursor-pointer transition"
            draggable
            onDragStart={(e) => handleDragStart(e, item.type)}
          >
            <div className="text-3xl">{item.icon}</div>
            <p className="text-sm text-white text-center mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
