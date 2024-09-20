import {connectDB} from '@/utils/database.js';
import Link from 'next/link';
import ListItem from './listItem';

export default async function List() {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    return (
        <div className="list-item" key= {i}>
            <Link href={'/detail/'+result[i]._id}><h4>{a.title}</h4></Link>
            <Link href={'/edit/'+result[i]._id} className='list=btn'>★</Link>
            <span>😂</span>

        </div>
        
    )
}