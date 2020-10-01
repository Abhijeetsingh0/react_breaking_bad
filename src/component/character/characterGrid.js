import React from 'react'
import Characteritem from './characterItem'
import Spinner from '../ui/Spinner'; 

const characterGrid =({isLoading,items}) => {
    return isLoading ? (<Spinner/>) : (<section className='cards'>
    {items.map(item=>(
        <Characteritem key={item.char_id} item={item} />
    ))}
    </section>)
}

export default characterGrid;
