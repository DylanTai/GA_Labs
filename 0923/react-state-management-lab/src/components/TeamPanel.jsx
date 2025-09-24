import FighterCard from "./FighterCard"

/**
 * Shows the user's team with remove actions.
 * @param {{ team: any[], onRemove: (fighter:any)=>void }} props
 */
export default function TeamPanel({ team, onRemove }) {
  return (
    <div>
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul className="cards">
          {team.map((fighter) => (
            <li key={fighter.id} className="card">
              <FighterCard
                fighter={fighter}
                actionLabel="Remove"
                onAction={() => onRemove(fighter)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
