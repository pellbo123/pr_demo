import {age, name} from Cart
export default function Cart() {
    return(
            <div className="caer-itme">
   .             <h4 className="title">Cart</h4>
            <cartItme item={장바구니}/>
            <cartItme/>
            <cartItme/>
            </div>
    )
}

function CartItem() {
    return(
        <div>
            <h4 className="title">Cart</h4>
            <div className="caer-itme">
                <p>상품명</p>
                <p>1999원</p>
                <p>1개</p>
            </div>
            <div className="caer-itme">
                <p>상품명</p>
                <p>1999원</p>
                <p>1개</p>
                </div>
        </div>
    )
}