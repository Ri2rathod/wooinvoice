import { __ } from '@wordpress/i18n'
import Blocks from './Blocks'

export default function NewElementSidebar() {
  return (
    <div className=''>
      <div className='px-2 py-4'>
        <h2 className='text-lg text-white font-bold text-center '>{__("Elements", 'wooinvoice')}</h2>
      </div>
      <div>
        <div>
          <Blocks />
        </div>
      </div>
    </div>
  )
}
