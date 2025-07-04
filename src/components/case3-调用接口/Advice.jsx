export default ({id,advice}) =>{
    return (
        <>
            <div style={{
                margin: '10px',
                padding: '5px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                backgroundColor: '#f9f9f9',
                display: 'inline-block',
                width: 'fit-content',
            }}>
                第{id}条建议：
            </div>
            <div style={{
                margin: '10px',
                padding: '5px',
                borderRadius: '8px',
                backgroundColor: '#e9f5fe',
                wordWrap: 'break-word',
                maxWidth: '500px',
            }}>
                {advice}
            </div>
        </>
    )
}