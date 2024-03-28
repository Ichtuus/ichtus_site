export interface UserSchema {
  uuid: number
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInRequestBody {
  email: string;
  password: string;
}

export interface UserRequestBody {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface UserData {
  uuid: number
  firstName: string
  lastName: string
  email: string
  verified: true
}