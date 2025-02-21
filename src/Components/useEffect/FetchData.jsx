import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [leagueId, setLeagueId] = useState(1);  
  const [teams, setTeams] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchTeamsData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.football-data.org/v4/competitions/${leagueId}/teams`, {
          headers: {
            'X-Auth-Token': 'adc15475e3b1456a9fa47a1808d9ebf6'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setTeams(data.teams); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamsData();
  }, [leagueId]);

  const handleLeagueChange = (e) => {
    setLeagueId(e.target.value);
  };

  return (
    <div>
      <h1>Football Teams</h1>
      <select value={leagueId} onChange={handleLeagueChange}>
        <option value={1}>Premier League</option>
        <option value={2}>La Liga</option>
        <option value={3}>Bundesliga</option>
        <option value={4}>Serie A</option>
      </select>

      {loading && <p>Loading teams...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {teams.length > 0 ? (
          teams.map((team) => (
            <li key={team.id}>{team.name}</li>
          ))
        ) : (
          <p>No teams found.</p>
        )}
      </ul>
    </div>
  );
};

export default FetchData;
