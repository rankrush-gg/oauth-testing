import { type NextRequest, NextResponse  } from 'next/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')

  // Redirect if code is not present
  if (!code) {
    return redirect('/');
  }

  const params = new URLSearchParams();
  params.append('client_id', process.env.CLIENT_ID);
  params.append('client_secret', process.env.CLIENT_SECRET);
  params.append('grant_type', 'authorization_code');
  params.append('redirect_uri', process.env.REDIRECT_URI);
  params.append('code', code);

  try {
    // Make post request to instagram api
    const response = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      body: params
    });

    // Instagram API response
    const data = await response.json();

    if (data.code === 400){
      return new Response(JSON.stringify(data, null, 2), { status: 400 });
    }
    
    // Send the access token to the frontend
    // for when in production probably, but rn localhost https issues
    // const res = NextResponse.redirect(new URL(request.url).origin, { status: 302 });
    const res = NextResponse.redirect(process.env.BASE_URL);
    res.cookies.set('access_token', data.access_token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/'
    });
    res.cookies.set('user_id', data.user_id, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/'
    });


    return res;
  } catch (error) {
    return new Response(JSON.stringify(error, null, 2), { status: 500 });
  }

}