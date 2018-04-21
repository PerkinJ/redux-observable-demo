/** Global definitions for development **/

// for style loader
// 解决Typescript引入css文件时，找不到css模块问题
declare module '*.css' {
    const styles: any;
    export = styles;
  }
  
// Omit type https://github.com/Microsoft/TypeScript/issues/12215
// 增加对文字类型减法的支持。
type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
