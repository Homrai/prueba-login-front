export interface userLog{
    user:string,
    password:string
}
export const initialUser:userLog={
    user:"",
    password:""
}
export interface Message{
    ok:boolean,
    msj:string
}
export const initialMsj:Message={
    ok:false,
    msj:""
}