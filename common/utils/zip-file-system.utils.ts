let zip = require('zip-js'); // Zip library

export class ZipFileSystemUtils {

   zipFileSystemEntry: Entry;

   constructor(file: any) {
      if (file && file.name) {
         zip.workerScriptsPath = "";
         zip.useWebWorkers = false;

         let rootDirName = file.name.slice(0, file.name.indexOf("."));
         this.zipFileSystemEntry = new Entry(rootDirName, true);
         this.initializeDirectories(file);
      }
   }

   private initializeDirectories(file: any): void {
      zip.createReader(new zip.BlobReader(file), (zipReader) => {
         zipReader.getEntries(this.readEntries);
      }, (error) => {
         console.log(error);
      });
   }

   private readEntries(entries): void {
      for (let i = 0; i < entries.length; i++) {
         let entry = entries[i];
         if (!entry.directory) {
            let filename = entry.filename.substring(entry.filename.lastIndexOf("/") + 1); //if inside folder
            let directoryPath = this.getDirectoryOfFile(entry.filename);
            this.addFileToDirectory(filename, directoryPath);
         } else {
            this.createDirectory(entry.filename);
         }
      }
   }

   private getStartIndexOfZipDirectories(entryName: string): number {
      return entryName.indexOf(this.zipFileSystemEntry.getEntryName()) + this.zipFileSystemEntry.getEntryName().length + 1;
   }

   private getNameOfDirectories(entryName: string): Array<string> {
      if (!!entryName) {
         return entryName.slice(this.getStartIndexOfZipDirectories(entryName)).split("/").filter((dir) => dir != "");
      }

      return [];
   }

   private getDirectoryOfFile(entryName: string): string {
      if (!!entryName) {
         return entryName.slice(0, entryName.lastIndexOf("/") + 1);
      }

      return null;
   }

   private createDirectory(directoryPath: string): Entry {
      let directories = this.getNameOfDirectories(directoryPath);

      let parentDirectory = this.zipFileSystemEntry;
      for (let i = 0; i < directories.length; i++) {
         let directory = this.getDirectoryByNameAndParent(directories[i], parentDirectory);

         if (!directory) {
            directory = this.createDirectoryWithName(directories[i], parentDirectory);
         }

         parentDirectory = directory;
      }

      return parentDirectory;
   }

   private getDirectoryByNameAndParent(directoryName: string, parentDirectory: Entry): Entry {
      return parentDirectory.getDirectoryEntries().find((directoryEntry: Entry) => {
         return directoryEntry.getEntryName() == directoryName;
      })
   }

   private createDirectoryWithName(directoryName: string, parentDirectory: Entry): Entry {
      let directoryEntry = new Entry(directoryName, true);
      parentDirectory.addDirectoryEntry(directoryEntry);

      return directoryEntry;
   }

   private addFileToDirectory(filename: string, directoryPath: string): void {
      let fileEntry = new Entry(filename, false);
      let parentDirectory = this.createDirectory(directoryPath);

      parentDirectory.addFileEntry(fileEntry);
   }
}

export class Entry {

   entryName: string;
   directoryEntries: Array<Entry>;
   fileEntries: Array<Entry>;
   isDirectory: boolean;

   constructor(entryName: string, isDirectory: boolean) {
      this.setEntryName(entryName);
      this.setIsDirectory(isDirectory);
      this.directoryEntries = [];
      this.fileEntries = [];
   }

   public setEntryName(entryName: string): any {
      this.entryName = entryName;
   }

   public getEntryName(): string {
      return this.entryName;
   }

   public setIsDirectory(isDirectory: boolean): void {
      this.isDirectory = isDirectory || false;
   }

   public getIsDirectory(): boolean {
      return this.isDirectory;
   }

   public addDirectoryEntry(directoryEntry: Entry): void {
      this.directoryEntries.push(directoryEntry);
   }

   public getDirectoryEntries(): Array<Entry> {
      return this.directoryEntries;
   }

   public addFileEntry(fileEntry: Entry): void {
      this.fileEntries.push(fileEntry);
   }

   public getFileEntries(): Array<Entry> {
      return this.fileEntries;
   }
}