import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'


import { Plus, Chart, AddUser, Setting, Image, EditSquare, InfoCircle, Notification, ChevronLeft } from 'react-iconly'



export default function Aside() {
  return (
    <aside id="main-sidebar" className=" zoom-in-0fixed bg-slate-900  top-0 left-0 z-40 w-1/4 min-w-96 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className='flex h-full' >
        <div className='px-8 py-6 flex flex-col items-center justify-between h-full bg-slate-800 -mt-16'>
          <div className="banding">
            <span className=''>
              <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"></img>
            </span>
          </div>
          <div className="navigation">
            <ul className='flex flex-col gap-5'>
              <li>
                <Button className="bg-transparent p-2 hover:bg-transparent text-slate-200 hover:text-white" >
                  <Plus />
                </Button>
              </li>
              <li>
                <Button className="bg-transparent p-2 hover:bg-transparent text-slate-200 hover:text-white">
                  <Chart />
                </Button>
              </li>
              <li>
                <Button className="bg-transparent p-2 hover:bg-transparent text-slate-200 hover:text-white">
                  <AddUser />
                </Button>
              </li>
              <li>
                <Button className="bg-transparent p-2 hover:bg-transparent text-slate-200 hover:text-white">
                  <EditSquare />
                </Button>
              </li>
              <li>
                <Button className="bg-transparent p-2 hover:bg-transparent text-slate-200 hover:text-white">
                  <Image />
                </Button>
              </li>
              <li>
                <Button className="bg-transparent p-2 hover:bg-transparent text-slate-200 hover:text-white">
                  <Setting />
                </Button>
              </li>
            </ul>
          </div>
          <div className="actions">
            <ul className='flex flex-col gap-5'>
              <li>
                <Button className="bg-transparent p-2 hover:bg-transparent text-slate-200 hover:text-white" >
                  <Notification />
                </Button>
              </li>
              <li>
                <Button className="bg-transparent p-2 hover:bg-transparent text-slate-200 hover:text-white">
                  <InfoCircle />
                </Button>
              </li>

            </ul>
          </div>

        </div>
        <div className='w-full'>
          <div className='px-2 py-4'>
           
            <Accordion type="single" collapsible className="w-full ">
              <AccordionItem value="item-1">
                <AccordionTrigger className='px-2' >Navigation</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className='px-2' >Heading</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className='px-2'> Text</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </aside>
  )
}
