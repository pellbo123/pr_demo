import {connectDB} from '@/utils/database.js';
export default async function handler(요청,응답) {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    console.log(result);

    if (요청.method=='GET') {
        응답.status(200).json({result});
    }
    if (요청.method=='POST') {
        응답.status(200).json({name : 'POST입니다'});
    }
}