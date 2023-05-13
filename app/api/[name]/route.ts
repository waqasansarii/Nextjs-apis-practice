import { NextRequest,NextResponse } from "next/server";



export async function GET(request:NextRequest,{params }: {params : {name:String}}){
   return NextResponse.json({
    profile : params.name,
    description:`${params.name} is a web developeer`,
    age:'22',
    requestType:'GET'
   })
}