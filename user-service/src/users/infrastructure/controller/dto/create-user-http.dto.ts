import {
    IsAlpha,
    IsAlphanumeric,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsStrongPassword,
    Matches,
  } from 'class-validator';
  
  export class CreateUserHttpDto {
    @IsAlphanumeric()
    @IsNotEmpty()
    name: string;
    
    @IsAlphanumeric()
    @IsNotEmpty()
    lastName: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    address: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    phone: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    @Matches(/^[A-Z0-9]{9}$/, {
      message: 'Passport number must be a 9-character alphanumeric string.',
    })
    passport: string;

    @IsNotEmpty()
    @IsAlpha()
    country: string;
    
    @IsStrongPassword({
        minLength: 8,             
        minLowercase: 1,          
        minUppercase: 1,          
        minNumbers: 1,            
        minSymbols: 1,            
      })
    @IsNotEmpty()
    password: string;
}
  