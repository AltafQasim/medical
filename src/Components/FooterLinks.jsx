import FtLink from "./FtLink";
import Payments from "./Payments";

const FooterLinks=()=>{
    const links=[
        {name:"Department", list:["Personal Care","Health Device","Baby Care","Nutration","Sceen Care","Immunity Booster","Diabetes Care"]},
        {name:"Services", list:["Consult Physicians", "Consult Dermatologists", "Consult Paediatricians", "Consult Gynaecologists", "Consult Gastroenterologists", "Consult Cardiologists", "Consult Dietitians"]},
        {name:"About Us", list:["Find a Pharmacy", "Careers", "Blogs", "Health Queries",'Know Your Health Credits','About One Apollo Program']},
        {name:"Help", list:["Shopcart Help", "Returns", "Track Orders", "Contact Us", "Feedback", "Security & Fraud"]}
    ]

    return <div className="flex md:justify-evenly md-mx:justify-around flex-wrap  p-5">
        <Payments className="mb-3"/>
        {
            links.map((e, i)=><FtLink className="mb-3" key={i} name={e.name} list={e.list}/>)
        }
    </div>
}
export default FooterLinks;