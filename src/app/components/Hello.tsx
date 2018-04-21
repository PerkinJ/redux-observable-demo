import * as React from "react";
import * as style from './style.css';
export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1 className={style.color} >Hello111 from {props.compiler} and {props.framework}!</h1>;
