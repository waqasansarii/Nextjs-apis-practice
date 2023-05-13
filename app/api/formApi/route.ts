import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: NextRequest) => {
  let res = await request.json()
  if (res.email && res.password && res.username) {
    return NextResponse.json({
      name: res.username,
      email: res.email,
      password: res.password,
    })
  } else {
    return new NextResponse('Please enter email, username and password!')
  }
}
