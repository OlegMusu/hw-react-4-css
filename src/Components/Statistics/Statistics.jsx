import './Statistics.css'

function Statistics ({id, label, percentage}) {
    return (
        <>
            <li className={`statistics-item statistics-item-${id}`} key={id}>
                <span style={{"fontSize": 25}}>{label} </span>
                <span style={{"fontSize": 35}}>{percentage}%</span>
            </li>
        </>
    )
}

export default Statistics