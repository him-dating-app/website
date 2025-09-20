import { NextRequest, NextResponse } from 'next/server';

// This is a placeholder API route that will need to be connected to your Supabase backend
// TODO: Replace with actual Supabase client and edge function call

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    // Call Supabase edge function to handle token generation and email sending
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mhuighaxkvoeqfatyrim.supabase.co';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1odWlnaGF4a3ZvZXFmYXR5cmltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NjIyMjAsImV4cCI6MjA2OTEzODIyMH0.tYvH6o2-cLZ6WLXZ8r131V_iKq49NqI7dD9e8R-vQA0';

    const supabaseResponse = await fetch(`${supabaseUrl}/functions/v1/request-completion-token`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const responseData = await supabaseResponse.json();

    if (!supabaseResponse.ok) {
      return NextResponse.json(
        { error: responseData.error || 'Failed to send new link' },
        { status: supabaseResponse.status }
      );
    }

    return NextResponse.json(responseData);

  } catch (error) {
    console.error('Error in request-completion-token:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}