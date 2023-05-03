interface Printer {
  print(content: string): void;
  scan(): void;
  fax(): void;
}

class realPrinter implements Printer {
  print(content: string) {
    console.log('Printing ' + content);
  }
  
  scan() {
    console.log('Scanning document');
  }
  
  fax() {
    console.log('Faxing document');
  }
}
