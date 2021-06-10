import bcrypt from 'bcryptjs'
const users =[
    {
    name: 'Admin user',
    email: 'tadeo.am@gmail.com',
    password: bcrypt.hashSync('123',10),
    isAdmin: true
    },
    {
        name: 'user 1',
        email: 'm@l.c',
        password: bcrypt.hashSync('123',10),        
    },
    {
        name: 'user 2',
        email: 'a@.m',
        password: bcrypt.hashSync('123',10),        
    }

]

export default users