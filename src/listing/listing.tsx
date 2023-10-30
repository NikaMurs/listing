import Item from "./item";

type DataProps = {
    items: Array<object>
}

export default function Listing(props: DataProps) {
    const { items = [] } = props;
    return (
        <div className="item-list">
            {items.map((item)=>{
                return <Item item={item} key={item.listing_id}/>
            })}
        </div>
    )
}