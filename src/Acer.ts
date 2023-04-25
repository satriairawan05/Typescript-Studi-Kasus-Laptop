import Laptop from "./module/class/BaseLaptop";

class Acer<T> extends Laptop<T> {
  constructor(type: T, numeric: boolean, touchButton: boolean){
    super("Acer", type, numeric, touchButton);
  }
}

export default Acer;