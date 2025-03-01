import { TextIcon, ImageIcon, FileTextIcon , TableIcon , DividerHorizontalIcon, StarIcon ,CodeIcon, Link2Icon ,AlignLeftIcon, DragHandleVerticalIcon} from '@radix-ui/react-icons'
import React from 'react'

export default function Blocks() {
  const icons = [
    { label: "Text", icon: <TextIcon className="text-white h-8 w-8" /> },
    { label: "Image", icon: <ImageIcon className="text-white h-8 w-8" /> },
    { label: "Woocommerce Fields", icon: <FileTextIcon className="text-white h-8 w-8" /> },
    { label: "Invoice Detail", icon: <TableIcon className="text-white h-8 w-8" /> },
    { label: "Separator", icon: <DividerHorizontalIcon className="text-white h-8 w-8" /> },
    { label: "Icon", icon: <StarIcon className="text-white h-8 w-8" /> },
    { label: "Custom Field", icon: <CodeIcon className="text-white h-8 w-8" /> },
    { label: "Link", icon: <Link2Icon className="text-white h-8 w-8" /> },
    { label: "QrCode", icon: <AlignLeftIcon className="text-white h-8 w-8" /> },
    { label: "Refund Detail", icon: <DragHandleVerticalIcon className="text-white h-8 w-8" /> },
  ];

  // Handle the drag start event
  const handleDragStart = (e, card) => {
    e.dataTransfer.setData('cardData', <p>asdasd</p>);
  };

  return (
    <div className="p-4  rounded-lg ">
      <div className="grid grid-cols-2 gap-4">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col py-2  items-center justify-center  rounded-lg shadow-md hover:bg-gray-600 cursor-pointer transition"
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
          >
            <div className="text-3xl">{item.icon}</div>
            <p className="text-sm text-white text-center mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
