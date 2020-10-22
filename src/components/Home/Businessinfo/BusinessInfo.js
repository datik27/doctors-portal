import React from 'react';
import InfoCard from '../InfoCard/InfoCard';


const infoData = [ {

    title: 'opening hours',
    description: 'we are open 7 days in week',
    icon: 'icon',
    background:'primary'

},
{
    
    title: 'visit our location',
    description: 'azimpur lalbag',
    icon: 'icon',
    background:'dark'

},
{
    
    title: 'call us now',
    description: '+601137025712',
    icon: 'icon',
    background:'primary'

}];

function BusinessInfo() {
    return (
        <section className="row">
             {infoData.map(info => <InfoCard info={info}></InfoCard>)}
        </section>
           
       
    );
}

export default BusinessInfo;