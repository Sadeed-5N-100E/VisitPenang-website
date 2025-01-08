import KLST1 from '../assets/NaturePics/KLST1.jpg'
import KLST2 from '../assets/NaturePics/KLST2.jpg'
import PNP1 from '../assets/NaturePics/PNP1.jpg'
import PNP2 from '../assets/NaturePics/PNP2.jpg'
import DestinationData from './DestinationData';
import "./DestinationStyle.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to explore</p>            

            <DestinationData
            className='first-des'
            heading="Kek Lok Si Temple"
            text="built since the year 1891, kek lok si temple situated in the island 
                    of penang, malaysia, is one of the largest and finest temples complexes 
                    in southeast asia. With millions of magnificent images of buddha and
                    hundreds of beautiful halls, pagodas and archways, kek lok si temple 
                    is not just a center of chinese culture and buddha teaching, but also 
                    an unique heritage treasures the have mahayana buddhism and traditional 
                    chinese rituals blend into harmonious whole, in temple architecture and
                    daily activities of worshipers."
            img1={KLST1}
            img2={KLST2}
            />

            <DestinationData
            className='first-des-reverse'
            heading="Penang National Park"
            text="Penang National Park is located on the northwestern corner of an island 
            located along the coast of northwestern Malaysia.The national park area covers 
            an area of 9.9 square miles (25.4 sq km) making it the smallest national park 
            in the country.
            
            The national park encompasses both a portion of land and sea providing a spectacular 
            place to discover the richness of the natural wonders of the area.  The wealth of 
            this natural habitat goes beyond drawing visitors by also attracting researchers as well."
            img1={PNP1}
            img2={PNP2}
            />      

        </div>
    );
};

export default Destination;