type ItemProps = {
    item: {
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
}

function getTitle(title: string){
    if(title.length >= 50){
        title = title.substring(0, 49);
        title = title + '…'
        return title
    } else {
        return title
    }
}

function getCurrency(currency: string){
    if (currency === 'USD'){
        return '$'
    }
    if (currency === 'EUR'){
        return '€'
    }
    return currency
}

function getQuantity(quantity: number){
    if (quantity <= 10){
        return 'level-low'
    }
    if (quantity <= 20){
        return 'level-medium'
    }
    if (quantity > 20){
        return 'level-high'
    }

}

export default function Item(props:ItemProps) {
    const {item} = props;
    if (item.state === 'active'){
        return (
            <div className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img alt="img" src={item.MainImage !== undefined ? item.MainImage.url_570xN : ''} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{getTitle(item.title !== undefined ? item.title : '')}</p>
                    <p className="item-price">{getCurrency(item.currency_code !== undefined ? item.currency_code : '') + item.price}</p>
                    <p className={'item-quantity ' + getQuantity(item.quantity !== undefined ? item.quantity : 0)}>{item.quantity} left</p>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}