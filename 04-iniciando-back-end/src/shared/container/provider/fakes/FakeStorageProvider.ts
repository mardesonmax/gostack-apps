import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  private files: string[] = [];

  async saveFile(file: string): Promise<string> {
    this.files.push(file);
    return file;
  }

  async deleteFile(file: string): Promise<void> {
    const fileIndex = this.files.findIndex((item) => item === file);

    this.files.splice(fileIndex, 1);
  }
}

export default FakeStorageProvider;
