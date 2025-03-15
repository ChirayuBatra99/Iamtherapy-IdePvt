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

export default function DifferentUsCardBlue({ title, desc,Icon }: CardWithFormProps) {  return (

     <div className="relative group">
      <Card className="w-[600px] h-[400px] items-center m-2   bg-blue-700 rounded-none
                      transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(255,105,180,0.6)] 
                      relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-pink-300/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>

        {Icon && <Icon className="w-20 h-20 text-white group-hover:text-yellow-300 transition-all duration-300" />}
        <CardHeader>
          <CardTitle className="text-2xl text-white">{title}</CardTitle>
          <CardDescription className="text-white">{desc}</CardDescription>
        </CardHeader>
      </Card>
    </div>

  )
}
