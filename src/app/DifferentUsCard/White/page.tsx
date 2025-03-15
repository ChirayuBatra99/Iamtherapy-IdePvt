import * as React from "react"
import { MdHealthAndSafety } from "react-icons/md";
import type { IconType } from 'react-icons';


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CardWithFormProps {
  title: string;
  desc: string;
  Icon: IconType;
}

export default function DifferentUsCard({ title, desc, Icon }: CardWithFormProps) {
  return (

    <div className="relative group">
      <Card className="w-[600px] h-[300px] items-center m-2 rounded-4xl border-amber-100 border-2 
                      transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(255,105,180,0.6)] 
                      relative overflow-hidden flex-row">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-pink-300/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>

        {/* {Icon && <Icon className="w-20 h-20 text-pink group-hover:text-yellow-300 transition-all duration-300" />} */}
        <CardHeader className="flex flex-col items-center w-[50%]">
          <CardTitle className="text-2xl ">{title}</CardTitle>
          <CardDescription className="text-black pt-7">{desc}</CardDescription>
          <Button className="bg-blue-600 w-[80%]">Book Therapy</Button>
        </CardHeader>

        <div className="p-6  min-h-screen flex justify-center items-center">
          <ul className="list-disc space-y-2 text-lg text-gray-800 bg-gray-100 p-6 rounded-lg shadow-md">
            <li className="hover:text-blue-500 transition-all">Depression</li>
            <li className="hover:text-blue-500 transition-all">Anxiety</li>
            <li className="hover:text-blue-500 transition-all">Chronic Stress</li>
            <li className="hover:text-blue-500 transition-all">Confidence Issues</li>
            <li className="hover:text-blue-500 transition-all">Realtionship Issues</li>
          </ul>
        </div>

      </Card>

    </div>

  )
}







{/* <CardContent>
<form>
  <div className="grid w-full items-center gap-4">
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Name of your project" />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="sveltekit">SvelteKit</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
          <SelectItem value="nuxt">Nuxt.js</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
</form>
</CardContent>
<CardFooter className="flex justify-between">
<Button variant="outline">Cancel</Button>
<Button>Deploy</Button>
</CardFooter> */}