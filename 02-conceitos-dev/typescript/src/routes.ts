import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWord(req: Request, res: Response) {

    const user = createUser({
        name: 'Mardeson',
        email: 'maxpb777@gmail.com',
        password: '123456',
        techs: ['JavaScrip', { title: 'NodeJS', experience: 100 }]
    })
    return res.json({message: `Hello Word, ${user.name}`});
}