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

    <Card className="w-[300px] items-center m-2 rounded-4xl border-amber-950 bg-pink-300">
        {/* {Icon && <Icon className="w-20 h-20"/>} */}
      <CardHeader>
              <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-white">
          {desc}
        </CardDescription>
      </CardHeader>
     
    </Card>

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