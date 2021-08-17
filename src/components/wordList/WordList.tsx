import React, { useState } from 'react';
import wordList from '../../words/wordList';

const columns = [
    // {
    //     title: '日付',
    //     dataIndex: 'date',
    //     key: 'date'
    // },
    {
        title: '韓国語',
        dataIndex: 'korean',
        key: 'korean'
    },
    {
        title: '日本語',
        dataIndex: 'japanese',
        key: 'japanese'
    },
]

const WordList: React.FC = () => {
    const [ currentList, setCurrentList ] = useState(wordList);

    const dataSource = currentList.filter((element) => {
        return true;
    });

    return (
        <div>
        </div>
    )
}

export default WordList;