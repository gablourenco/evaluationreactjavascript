import { useState, useEffect } from 'react'

import RuleList from './RuleList'

export default function App() {
    const [rulesData, setRulesData] = useState([])
 
       useEffect(() => {
        fetch('http://localhost:4000/rest/shows')
            .then(response => response.json())
            .then(data => setRulesData(data))
    }, [])

    return (
        <div>
            <RuleList rules={rulesData} />
        </div>
    )
}