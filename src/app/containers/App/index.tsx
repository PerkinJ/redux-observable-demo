import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Hello } from "app/components/Hello";

export namespace App {
    export interface Props extends RouteComponentProps<void> {
        compiler: string;
        framework:string;
    }
}
  
export class App extends React.Component<App.Props>{
    static defaultProps: Partial<App.Props> = {
        compiler: '11',
        framework:'22'
      };
      render(){
        return (
            <Hello compiler="test" framework="ts"/>
        )
      }
    
    }
