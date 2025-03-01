import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, Folder, Play } from 'react-iconly'
import { useBuilderConfig } from '../lib/ContextAPI'
import { useEffect } from 'react';


export default function Header() {
  const { builderConfig, setBuilderConfig } =  useBuilderConfig();
  
  
  return (
    <header className="bg-slate-900  fixed top-0 left-0 right-0">
      <div className='w-full px-28'>
        <div className='flex justify-between'>
          <div className='header-navigation flex gap-6 px-2 py-3 align-middle'>
            <div>
              <Button className='bg-slate-700 p-2 translate-x-1 hover:bg-slate-500' >
                <ChevronLeft />
              </Button>
            </div>
            <div>
              <h4 className='text-white font-bold'>Untitle Page</h4>
              <a className='text-gray-400 hover:text-gray-200 translate-x-1' href='http://www.google.com'>http://www.google.com</a>
            </div>
          </div>
          <div className='header-actions'>
            <div className='flex align-middle gap-3 items-center h-full'>
              <Button className='p-2'>
                <Folder />
              </Button>
              <Button className='p-2'>
                <Play />
              </Button >
              <Button className="bg-gray-50 text-black "> Publish </Button>
              <Avatar >
                <AvatarImage src={builderConfig?.user?.avatar || "https://github.com/shadcn.png"} />
                <AvatarFallback>..</AvatarFallback>
              </Avatar>

            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
