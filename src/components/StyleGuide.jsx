"use client"
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import Link from 'next/link'
import { Label } from './ui/label'
import { Input } from './ui/input'

const StyleGuide = () => {

  const [date, setDate] = React.useState()

  return (
    <>
      <div className='flex flex-col gap-y-4 p-24'>
            <h1>Headding 1</h1>
            <h2>Headding 2</h2>
            <h3>Headding 3</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Asperiores rerum neque aperiam iure distinctio nobis ex aliquam optio! 
              Doloribus exercitationem consequatur sapiente nam sed dolor natus hic corrupti enim fugit.
            </p>
            
            
      </div>
      <div className='bg-black p-24 flex flex-col gap-y-4'>
        <Link href='/'>Link</Link>
        {/* button  */}
        <Button variant='default'>Button 1</Button>
        <Button variant='orange'>Button 2</Button>
        <Button variant='input'>Button 3 </Button>
        <Button variant='orange' size='sm'>Button 4</Button>
        {/* label & input  */}
        <div>
          <label htmlFor="firstname">First Name</label>
          <Input type="firstname" id='firstname' />
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <Input type="lastname"  id='lastname'/>
        </div>

        {/* calendar  */}
        <div>
          <label>Date</label>
          <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"input"}
              className={cn(
                "w-full justify-start text-left font-normal")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        </div>

        {/* select opction  */}
        <div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        </div>

      </div>
    </>
    
  )
}

export default StyleGuide
