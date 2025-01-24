import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Create messages directory if it doesn't exist
    const messagesDir = path.join(process.cwd(), 'messages');
    await fs.mkdir(messagesDir, { recursive: true });

    // Save message to JSON file
    const timestamp = new Date().toISOString();
    const fileName = `${timestamp.replace(/[:.]/g, '-')}.json`;
    await fs.writeFile(
      path.join(messagesDir, fileName),
      JSON.stringify({ timestamp, name, email, message }, null, 2)
    );

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}