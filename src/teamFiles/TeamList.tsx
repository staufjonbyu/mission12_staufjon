import React from 'react';


import TeamCard from './TeamCard';

import cbt from './CBT.json';


function TeamList() {
  return (
    <div className="App">
        {cbt.teams.map(oneTeam => <TeamCard {...oneTeam}/>)}
    </div>
  );
}

export default TeamList;
