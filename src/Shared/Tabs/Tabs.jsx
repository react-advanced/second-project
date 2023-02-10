import React from 'react'
import Tab from '../Tab/Tab';
import { TABS } from './../../Lists/Tabs';

const Tabs = () => {
  return (
    <div className='flex items-center justify-center'>
      {TABS.map(tab => (
        <Tab key={tab.id}>{tab.name}</Tab>
      ))}
    </div>
  )
}

export default Tabs