import React from 'react';
import './timeline.css';


const Timeline = () => {

    return (

        <div className='main'>
            <div className="background">
                            <h1> HHO <span> Body </span> </h1>

            <div className='timeline'>



                <div className='member-card left-container'>

                    <img src="logo192.png" alt='Core' />

                    <div className='text-box corecard'>

                        <h2 className='coretext'> Core </h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusantium deleniti, impedit tempora minus, harum sit quibusdam voluptatibus dicta corrupti ratione esse odio architecto neque animi tempore mollitia! Error, illo.
                        </p>

                        <span className='left-container-arrow corearrow'></span>

                    </div>

                </div>


                <div className='member-card right-container'>

                    <img src="logo192.png" alt='Accountant' />

                    <div className='text-box accountcard'>

                        <h2 className='accounttext'> Accountant </h2>


                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed commodi, itaque enim tempore voluptatum est aliquam quas, sint eligendi, culpa odio? Eligendi harum expedita quibusdam reiciendis in ipsum cumque illo!
                        </p>

                        <span className='right-container-arrow accountarrow'></span>

                    </div>

                </div>



                <div className='member-card left-container'>

                    <img src="logo192.png" alt='Executive' />

                    <div className='text-box executivecard'>

                        <h2 className='executivetext'> Executive </h2>


                        <p>

                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima expedita officiis aut facere delectus dignissimos praesentium dicta quam vero quidem explicabo molestiae tempora non eveniet accusamus, quas ratione error fuga.

                        </p>

                        <span className='left-container-arrow executivearrow'></span>

                    </div>

                </div>


    

                <div className='member-card right-container'>

                    <img src="logo192.png" alt='hr' />

                    <div className='text-box hrcard'>

                        <h2 className='hrtext'> HR </h2>


                        <p>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam autem facere sunt earum officiis, nulla voluptas iure, adipisci ipsum necessitatibus numquam. Incidunt accusantium harum ratione, earum ex ut nobis.

                        </p>

                        <span className='right-container-arrow hrarrow'></span>

                    </div>

                </div>


              

            </div>
            </div>


        </div>
    );
};

export default Timeline;