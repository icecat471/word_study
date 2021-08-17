import React, { useState } from 'react';
import { Table, Tag, Space } from 'antd';
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
        <div style={{
            paddingTop: 100, 
            paddingLeft: 50, 
            paddingRight: 50,
            maxWidth: 800, 
            width: '100%'
        }}>
            <Table 
                dataSource={dataSource} 
                columns={columns}
                bordered
                pagination={{
                    defaultPageSize: 10,
                    pageSizeOptions: ['10']
                }}
            ></Table>
        </div>
    )
}

export default WordList;