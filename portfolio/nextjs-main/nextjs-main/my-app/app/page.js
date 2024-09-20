import Link from "next/link";

export default function Home() {
  let name = '리승만'
  return (
    <div>
      <h4 className="className" style={{color: 'red'}}>소비조합상점	 </h4>
      <p className="className">고용로동자 {name}</p>
    </div>
  );
}
