'use client'
import {connectDB} from '@/utils/database.js';
import Link from 'next/link';
import ListItem from './ListItem';

export default function ListItem(){
    return(
        <div>
        {
                result.map((a,i) =>
            
            <div className='list-ite' key={1}>
                <Link href={'/detail/'+result[i]._id}><h4>{a.title}</h4></Link>
                <Link href={'/edit/'+result[i]._id} className='list=btn'>★</Link>
                <p>1월1일</p>
            </div>
            )
        }
        </div>
    )
}