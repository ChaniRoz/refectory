// const Joi = require('joi');
// const { validate } = require('../validation/userValid'); // המניאל שלך, לפי הקובץ בו הגדרת את השיטה

// describe('Validation Tests', () => {
   

//     test('User data without email should fail validation', () => {
//         const userData = {
//             phone: '123456789',
//             userName: 'JohnDoe',
//             password: 'securepassword'
//         };

//         const result = validate(userData);
//         expect(result.error).not.toBeNull();
//     });
//     test('User data without email should fail validation', () => {
//         const userData = {
//             phone: '123456789',
//             userName: 'ValidUser',
//             password: 'ValidPassword123',
//             email:"kjshdgj@gmail.com"
//         };
    
//         const result = validate(userData);
//         expect(result.error).not.toBeNull(); 
//     });

//     test('User data with invalid phone number should fail validation', () => {
//         const userData = {
//             phone: '123',
//             userName: 'JohnDoe',
//             email: 'johndoe@example.com',
//             password: 'securepassword'
//         };

//         const result = validate(userData);
//         expect(result.error).not.toBeNull();
//     });

//     test('User data with invalid password should fail validation', () => {
//         const userData = {
//             phone: '123456789',
//             userName: 'JohnDoe',
//             email: 'johndoe@example.com',
//             password: 'aaaaaaaaaa'
//         };

//         const result = validate(userData);
//         expect(result.error).not.toBeNull();
//         expect(result.error.details[0].message).toContain('"password" length must be at least 6 characters long');
//     });
// });
