import "./ItemListContainer.css"
const ItemListContainer = ({children}) => {
    return <div className="menuContainer">
        {children}
    </div>;
}
export default ItemListContainer;