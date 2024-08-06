import Seo from "../components/Seo";
import Clemz from "../components/pages/homepage"




export default function ()
{
    
    return (
        <>
        <Seo pageTitle="Home" font={undefined} />
        <div className="flex">
        <Clemz />
        </div>
        </>
    )
}