import {NextRequest , NextResponse} from 'next/server'


export async function GET(request : NextRequest){
  let url = request.nextUrl
  if(url.searchParams.has('name')){
    let name = url.searchParams.get('name')
    return NextResponse.json({message : `Hello ${name}`})
  }else{
    return new NextRequest('Please provide a param in url of name')
  }
// return NextResponse.json({
//     
// })
}