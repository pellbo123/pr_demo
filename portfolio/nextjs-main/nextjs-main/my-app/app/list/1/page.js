import Image from "next/image"
export default function List () {
    return (                                    
        <div>
            <h4 className="title">교류상품</h4>
            {
                교류상품.map((a,i) => {
                return(
                    <div className="음식" key={i}>
                      <img src={`/음식${i.jpg}`} className="음식-img"></img>
                    <h4>{a} 1400원</h4>
                    </div>

                )
            })
        }
        </div>
    )
}