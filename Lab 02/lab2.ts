interface UserInput {
  decorate(): any;
}
class Decorator implements UserInput {
  inputText: UserInput;

  constructor(inputText: UserInput) {
    this.inputText = inputText;
  }
  text: string;

  decorate(): any {
    return this.inputText.decorate();
  }
}

class UserInput implements UserInput {
  text!: string;

  constructor(text: string) {
    this.text = text;
  }

  decorate(): any {
    return this.text;
  }
}

class BoldDecorator extends Decorator {
  public decorate(): string {
    return super.decorate().bold();
  }
}
class ItalicDecorator extends Decorator {
  public decorate(): string {
    return super.decorate().italics();
  }
}

class StrikeDecorator extends Decorator {
  public decorate(): string {
    return super.decorate().strike();
  }
}

const text = new UserInput("Hello World");
console.log("Plain word: ", text.decorate());

const decorator1 = new BoldDecorator(text);
console.log("Bold word: ", decorator1.decorate());

const decorator2 = new ItalicDecorator(decorator1);
console.log("Bold and Italic word: ", decorator2.decorate());

const decorator3 = new StrikeDecorator(decorator2);
console.log("Bold, Italic and Strike word: ", decorator3.decorate());
