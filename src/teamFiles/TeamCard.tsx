import React from 'react';
import "./Team.css";

class TeamCard extends React.Component<{school:string; name:string; city:string; state:string;}>{
    render(){
        const oneTeam = this.props;
        return(
            <div className='Box'>
                <h1 className='H1Box'>{oneTeam.school}</h1>
                <h2>Mascot: {oneTeam.name}</h2>
                <h4>Location: {oneTeam.city}, {oneTeam.state}</h4>
            </div>
        );

    }

}
export default TeamCard;