import Item from "./item";

type ItemEl = {
    listing_id: number,
    state: string,
    url?: string,
    MainImage?: {
        url_570xN: string
    },
    title?: string,
    currency_code?: string,
    price?: string,
    quantity?: number
}

type DataProps = {
    items: Array<ItemEl>
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