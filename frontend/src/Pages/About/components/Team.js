import React from 'react';
import { useEffect, useState } from 'react';
import "./AboutPage.css";
import "./Team.css";
function Team() {
    const [teamData, setTeamData] = useState(null);

    useEffect(() => {
        // Fetching the local JSON file
        fetch('/data.json') // Note: This will look for the file in the 'public' folder
            .then(response => response.json())
            .then(data => setTeamData(data))
            .catch(error => console.error('Error fetching team data:', error));
    }, []);
    console.log(teamData)
    const teamdetails = (teamData) => {
        if (teamData) {
            return teamData.map((item, index) => {
                return (
                    // <div className="card mb-3 col-12 col-md-5 offset-1" style={{ maxWidth: "540px", }} key={index}>
                    //     <div className="row g-0">
                    //         <div className="col-md-4" style={{ borderRadius: "50%" }}>
                    //             <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" className="profile-pic " alt="..." />
                    //         </div>
                    //         <div className="col-md-8">
                    //             <div className="card-body" style={{ textAlign: "left" }}>
                    //                 <h5 className="card-title" >---{item.name}</h5>
                    //                 <h5>Functionality : <span>{item.role}</span></h5>
                    //                 <h5>Branch: <span>{item.branch}</span></h5>
                    //                 <h5> Year: <span>{item.year}</span></h5>
                    //             </div>
                    //         </div>
                    //     </div>
                    //</div>
                    <div style={{ color: "darkorange" }} key={index}>
                        <h5 style={{ marginBottom: "15px" }} className='role mt-5 about-content'>{item.role}</h5>
                        <div className='profile-card'>
                            <div className='img'>
                                <img src={item.photo} alt=".." />
                            </div>
                            <div className='caption'>
                                <h5 className='about-content'>{item.name}</h5>
                                <h5 className='about-content'>{item.id}</h5>
                                <p className='about-content'>{item.role}</p>
                                <div className='social-links'>
                                    <a href={`tel:${item.contact}`}><i className="fa-solid fa-phone"></i></a>
                                    <a href={`mailto:${item.email}`}><i className="fa-solid fa-envelope"></i></a>
                                    <a href={`${item.linkedin}`} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })
        }
    }
    return (
        <div className='about-team text-center'>
            <h1 className='about-title mb-2'>Our <span className='span'>Team</span></h1>
            <div className='team' id="team">
                {teamdetails(teamData)}
            </div>

        </div>
    );
}

export default Team;