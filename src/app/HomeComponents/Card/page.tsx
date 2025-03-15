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

export default function CardWithForm({ title, desc,Icon }: CardWithFormProps) {  return (

    // <Card className="w-[300px] h-[300px] items-center m-2 rounded-4xl border-amber-100 border-2 bg-pink-300">
    //     {Icon && <Icon className="w-20 h-20"/>}
    //   <CardHeader>
    //           <CardTitle className="text-2xl">{title}</CardTitle>
    //     <CardDescription className="text-black pt-7">
    //       {desc}
    //     </CardDescription>
    //   </CardHeader>
     
    // </Card>
     <div className="relative group">
      <Card className="w-[300px] h-[300px] items-center m-2 rounded-4xl border-amber-100 border-2 bg-pink-300 
                      transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(255,105,180,0.6)] 
                      relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-pink-300/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>

        {Icon && <Icon className="w-20 h-20 text-white group-hover:text-yellow-300 transition-all duration-300" />}
        <CardHeader>
          <CardTitle className="text-2xl ">{title}</CardTitle>
          <CardDescription className="text-black pt-7">{desc}</CardDescription>
        </CardHeader>
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