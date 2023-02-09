 interface response {
    id: string,
  fname: string,
  lname:string,
  email:string,
  mobile:string,
  role:string,
  
  }
   interface optresponse {
    id: string|null,
  message:string|null,
  success:string|null,
  }
   interface editresponse  {
    status : number ,
    error :string|null,
    messages : {
        success :string,
        message :string
  }
}
 interface authResponse {
    messages: {
      success: string,
      message:string,
      role:string,
      id:string,
      authorization:string,
    }
  }
    interface UserDetailResponse {
    id: string,
    fname: string,
    lname: string,
    email: string,
    mobile: string,
    role: string,
  }
  export type {UserDetailResponse,authResponse,editresponse,optresponse,response}