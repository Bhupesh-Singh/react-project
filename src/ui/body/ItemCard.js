
export default function ItemCard({item, children}) {
    return (
        <div className="item-card">
            <img className="item-thumbnail" alt={item.title} src={item.thumbnail} />
            <h1 className="item-title">{item.title}</h1>
            <p className="item-description">{item.description}</p>
            <div className="item-price">${item.price}</div>
            {children}
        </div>
    )
}