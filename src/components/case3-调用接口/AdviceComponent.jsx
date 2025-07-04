import { useEffect, useState } from "react";
import Advice from "./Advice.jsx";
export default function AdviceComponent() {
    const [adviceData, setAdviceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ok, setOk] = useState(false);
    function handleClick(event) {
        event.preventDefault();
        setOk(!ok);
    }
    function getRandomIdArray(adviceCount){
        const idSet = new Set();
        while(idSet.size < adviceCount){
            const randomId = Math.floor(Math.random() * 220) + 1;
            idSet.add(randomId);
        }
        const idArray = Array.from(idSet);
        idArray.sort((a, b) => a - b);
        return idArray;
    }
    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                const idArray=getRandomIdArray(5);
                const promises = idArray.map(id => fetch(`https://api.adviceslip.com/advice/${id}`).then(res => res.json()))
                const data = await Promise.all(promises);
                setAdviceData(data);
            } catch (err) {
                setError('请求失败，请稍后重试');
            }finally {
                setLoading(false);
            }
        }
        getData();
    }, [ok]);

    if (loading) return <span>加载中...</span>;
    if (error) return <span>{error}</span>;

    return (
        <>
            <button onClick={handleClick} style={{margin: '10px', padding: '5px'}}>刷新人生建议</button>
            <br/>
            {adviceData.map((item) => (
                <Advice key={item.slip.id}   id={item.slip.id} advice={item.slip.advice} />
            ))}
        </>
    );

}