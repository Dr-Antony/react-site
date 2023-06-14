import React from 'react';
import MyInput from '../UI/Input/MyInput';
import MySelect from '../UI/Select/MySelect';
const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput value={filter.query} onChange={e => setFilter({...filter, query:e.target.value})} placeholder={'Search..'} />
            <MySelect onChange={selectedSort=>setFilter({...filter,sort:selectedSort})} value={filter.sort} defaultValue={'Sorting by..'} options={[{ value: 'title', name: 'By name' }, { value: 'body', name: 'By description' }]} />
        </div>
    )
}

export default PostFilter;