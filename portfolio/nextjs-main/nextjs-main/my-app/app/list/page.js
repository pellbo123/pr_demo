import Image from "next/image"
export default function Home () {
    let 교류상품 = ['워드까', '목포', '고철']
    return (
        <div>
            <h4 className="title">교류상품</h4>
            <div className="음식">
                <h4>{교류상품[0]} 1400원</h4>
            </div>
            <div className="음식">
                <h4>{교류상품[1]} 1500원</h4>
            </div>
            <div className="음식">
                <h4>{교류상품[2]} 1900원</h4>
            </div>
        </div>
    )
}