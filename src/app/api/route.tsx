import { type NextRequest, NextResponse } from 'next/server'
 
export async function POST(request: NextRequest) { 
    // input: access token, endpoint
    // make request with token at endpoint
    // send data back to frontend
    // in the future send data to Cairo here
    try {

    const {endpoint} = await request.json()
    const accessToken = request.cookies.get('access_token')?.value
    const userId = request.cookies.get('user_id')?.value

    if (!accessToken) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const finalEndpoint = endpoint + "&access_token=" + accessToken;
    const externalApiResponse = await fetch(finalEndpoint);

    const data = await externalApiResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
