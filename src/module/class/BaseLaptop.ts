import InterfaceLaptop from "../interface/InterfaceLaptop";
import * as Keyboard from "./Keyboard";

abstract class BaseLaptop<T> implements InterfaceLaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;
  
  constructor
  (
    name: string,
    type: T, 
    numeric:boolean, 
    touchButton:boolean
  ){
    this.name = name;
    this.type = type;
    this.withNumeric = numeric;
    this.withTouchButton = touchButton;
  }

  a(){
    return Keyboard.a
  }

  b(){
    return Keyboard.b
  }

  c(){
    return Keyboard.c
  }
}

export default BaseLaptop;