import { NextResponse } from 'next/server';
import { CSVHandler } from '@/utils/csvHandler';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const csvHandler = new CSVHandler();
    await csvHandler.saveMessage(body);

    return NextResponse.json(
      { message: 'Message saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Failed to save message' },
      { status: 500 }
    );
  }
}

// Optional: Add a GET route to read messages
export async function GET() {
  try {
    const csvHandler = new CSVHandler();
    const messages = await csvHandler.readMessages();
    
    return new NextResponse(messages, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=messages.csv'
      }
    });
  } catch (error) {
    console.error('Error reading messages:', error);
    return NextResponse.json(
      { error: 'Failed to read messages' },
      { status: 500 }
    );
  }
}
