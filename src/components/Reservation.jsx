'use client'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import ReservationFrom from './ReservationFrom'

const Reservation = () => {
  return (
    <motion.section
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    className='xl:my-32 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat
    xl:flex xl:flex-col xl:justify-end xl:items-end ' id='reservation'>
      <div className='bg-black w-full xl:max-w-[868px] min-h-[518px] p-8 md:p-14 xl:p-16'>
        <h2 className='text-white mb-9 capitalize'>Book a table</h2>
        <ReservationFrom/>
      </div>
    </motion.section>
  )
}

export default Reservation
