import { promises as fs } from 'fs';
import path from 'path';

interface MessageData {
  name: string;
  email: string;
  message: string;
}

export class CSVHandler {
  private filePath: string;
  
  constructor() {
    this.filePath = path.join(process.cwd(), 'data', 'messages.csv');
  }

  async initialize() {
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir);
    }

    // Create CSV file with headers if it doesn't exist
    try {
      await fs.access(this.filePath);
    } catch {
      await fs.writeFile(this.filePath, 'Timestamp,Name,Email,Message\n');
    }
  }

  async saveMessage(data: MessageData) {
    const timestamp = new Date().toISOString();
    const csvLine = `${timestamp},"${data.name}","${data.email}","${data.message.replace(/"/g, '""')}"\n`;
    
    await this.initialize();
    await fs.appendFile(this.filePath, csvLine, 'utf-8');
  }

  async readMessages(): Promise<string> {
    await this.initialize();
    return await fs.readFile(this.filePath, 'utf-8');
  }
}
