// import React from 'react';
// import './testimonals.css';

// // export const profiles = [
// //   {
// //     name: 'BHFBVJMDB',
// //     image: 'groot.jpg',
// //     description: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'BKJDFHKK',
// //     image: 'groot.jpg',
// //     description: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'KJHNVCKJ',
// //     image: 'groot.jpg',
// //     description: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'HSKDBVKH',
// //     image: 'groot.jpg',
// //     description: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   }
// //   ,
// //   {
// //     name: 'BHFBVJMDB',
// //     image: 'groot.jpg',
// //     description: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'BKJDFHKK',
// //     image: 'groot.jpg',
// //     description: '6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'KJHNVCKJ',
// //     image: 'groot.jpg',
// //     description: '7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'HSKDBVKH',
// //     image: 'groot.jpg',
// //     description: '8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'BHFBVJMDB',
// //     image: 'logo192.png',
// //     description: '9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'BKJDFHKK',
// //     image: 'logo192.png',
// //     description: '10Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'KJHNVCKJ',
// //     image: 'logo192.png',
// //     description: '11Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'HSKDBVKH',
// //     image: 'logo192.png',
// //     description: '12Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   }
// // ];

// const ProfileSlider = () => {
//   return (
//     // <div className="testimonals mb-5">
//     //     <div className="profile-slider">
//     //   {profiles.map((profile, index) => (
//     //     <div key={index} className="profile-card">
//     //       <img src={profile.image} alt={profile.name} className="profile-image" />
//     //       <h3>{profile.name}</h3>
//     //       <p>{profile.description}</p>
//     //     </div>
//     //   ))}
//     //   {/* <div className="scroll-indicator"></div> */}
//     // </div>
//     // </div>

//       <>
        
      
//       </>
    
//   );
// };

// export default ProfileSlider;



// import React, { useEffect, useRef, useState } from 'react';
// import './testimonals.css';
// const testimonials = [
//   {
//     id: 1,
//     name: "Bambang Sucat",
//     position: "CEO of Coca Soft",
//     text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
//     rating: 5,
//     img: "path-to-image/bambang-sucat.jpg"
//   },
//   {
//     id: 2,
//     name: "Kathryn Murphy",
//     position: "Founder ABC Studio",
//     text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
//     rating: 5,
//     img: "path-to-image/kathryn-murphy.jpg"
//   },
//   {
//     id: 3,
//     name: "Beby Aduhai",
//     position: "CEO of Sans Design",
//     text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
//     rating: 5,
//     img: "path-to-image/beby-aduhai.jpg"
//   },
//   {
//     id: 2,
//     name: "Kathryn Murphy",
//     position: "Founder ABC Studio",
//     text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
//     rating: 5,
//     img: "path-to-image/kathryn-murphy.jpg"
//   },
//   {
//     id: 3,
//     name: "Beby Aduhai",
//     position: "CEO of S",
//     text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
//     rating: 5,
//     img: "path-to-image/beby-aduhai.jpg"
//   },
//   {
//     id: 2,
//     name: "Kathryn Murphy",
//     position: "Founder ABC Studio",
//     text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
//     rating: 5,
//     img: "path-to-image/kathryn-murphy.jpg"
//   },
//   {
//     id: 3,
//     name: "Beby ",
//     position: "CEO of Sans ",
//     text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
//     rating: 5,
//     img: "path-to-image/beby-aduhai.jpg"
//   },
// ];

// const Testimonials = () => {

//   const testimonialsRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Loop through testimonials
//     }, 1000); // 1-second interval

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   useEffect(() => {
//     // Automatically scroll the container to the next testimonial
//     if (testimonialsRef.current) {
//       const container = testimonialsRef.current;
//       const cardHeight = container.clientHeight / testimonials.length;

//       container.scrollTo({
//         top: currentIndex * cardHeight,
//         behavior: 'smooth', // Smooth scrolling effect
//       });
//     }
//   }, [currentIndex]);

//   return (
//     <section className="testimonials">
//       <h2>What People <span>said</span></h2>
//       <p>Risus viverra justo sagittis vestibulum metus.</p>
//       <div className="container-fluid ">
//         <div className="row m-auto">
//           <div className="col-12 m-auto">
//           <div className="testimonials-container" ref={testimonialsRef}>
//         {testimonials.map(testimonial => (
//           <div className="testimonial-card" key={testimonial.id}>
//             <div className="stars ml-3 mr-3 mt-3">
//               {"★".repeat(testimonial.rating)}
//             </div>
//             <p className='ml-3 mb-4 mt-2 mr-3'>{testimonial.text}</p>
//             <div className="client-info">

//               <div>
//                 <h3>{testimonial.name}</h3>
//                 <p>{testimonial.position}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//           </div>
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default Testimonials;





import React, { useEffect, useRef, useState } from 'react';
import './testimonals.css'; // Import your CSS file

const testimonials = [
  {
    id: 1,
    name: "Bambang Sucat",
    position: "CEO of Coca Soft",
    text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
    rating: 5,
    img: "path-to-image/bambang-sucat.jpg"
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    position: "Founder ABC Studio",
    text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
    rating: 5,
    img: "path-to-image/kathryn-murphy.jpg"
  },
  {
    id: 3,
    name: "Beby Aduhai",
    position: "CEO of Sans Design",
    text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
    rating: 5,
    img: "path-to-image/beby-aduhai.jpg"
  },
  {
    id: 1,
    name: "Bambang Sucat",
    position: "CEO of Coca Soft",
    text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
    rating: 5,
    img: "path-to-image/bambang-sucat.jpg"
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    position: "Founder ABC Studio",
    text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
    rating: 5,
    img: "path-to-image/kathryn-murphy.jpg"
  },
  {
    id: 3,
    name: "Beby Aduhai",
    position: "CEO of Sans Design",
    text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
    rating: 5,
    img: "path-to-image/beby-aduhai.jpg"
  },
  {
    id: 1,
    name: "Bambang Sucat",
    position: "CEO of Coca Soft",
    text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
    rating: 5,
    img: "path-to-image/bambang-sucat.jpg"
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    position: "Founder ABC Studio",
    text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
    rating: 5,
    img: "path-to-image/kathryn-murphy.jpg"
  },
  {
    id: 3,
    name: "Beby Aduhai",
    position: "CEO of Sans Design",
    text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
    rating: 5,
    img: "path-to-image/beby-aduhai.jpg"
  },
  {
    id: 1,
    name: "Bambang Sucat",
    position: "CEO of Coca Soft",
    text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
    rating: 5,
    img: "path-to-image/bambang-sucat.jpg"
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    position: "Founder ABC Studio",
    text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
    rating: 5,
    img: "path-to-image/kathryn-murphy.jpg"
  },
  {
    id: 3,
    name: "Beby Aduhai",
    position: "CEO of Sans Design",
    text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
    rating: 5,
    img: "path-to-image/beby-aduhai.jpg"
  },
];

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Loop through testimonials
    }, 1000); // 1-second interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    // Automatically scroll the container to the next testimonial (horizontally)
    if (testimonialsRef.current) {
      const container = testimonialsRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;

      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth', // Smooth scrolling effect
      });
    }
  }, [currentIndex]);

  return (
    <section className="testimonials">
      <h2>What our clients <span>said</span></h2>
      <p>Risus viverra justo sagittis vestibulum metus.</p>
      <div
        className="testimonials-container"
        ref={testimonialsRef}
        
      >
        {testimonials.map((testimonial) => (
          <div
            className="testimonial-card"
            key={testimonial.id}
            
          >
            <div className="stars">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className='ml-3 mb-4 mt-2 mr-3'>{testimonial.text}</p>
            <div className="client-info">
              
              <div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
