import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({
    from: 'waqas',
    message: 'Hello how are you',
    requestType: 'GET',
  })
}


export async function POST(request:NextRequest){
    const req = await request.json();
    if(req.name){
      return NextResponse.json({
        To: req.name,
        Message: "All well here",
        RequestType: "POST"
      });
    }
    else {
      return new NextResponse('Please include your name in the POST request');
    }
}

export async function PUT(request:NextRequest){
    const req = await request.json();
    if(req.name){
      return NextResponse.json({
        from: 'updated by waqas',
        Message: "All well here",
        RequestType: "POST"
      });
    }
    else {
      return new NextResponse('Please include your name in the POST request');
    }
}