/**
 * Presentational card for a single fighter.
 * Keeps markup consistent between roster and team usage.
 * @param {{ fighter: any, actionLabel?: string, onAction?: () => void, disabled?: boolean, title?: string }} props
 */
export default function FighterCard({ fighter, actionLabel, onAction, disabled, title }) {
  return (
    <article className="fighter">
      <img src={fighter.img} alt={fighter.name} />
      <div className="info">
        <h3>{fighter.name}</h3>
        <p>Price: ${fighter.price}</p>
        <p>Strength: {fighter.strength}</p>
        <p>Agility: {fighter.agility}</p>
      </div>
      {actionLabel && (
        <button onClick={onAction} disabled={disabled} title={title}>
          {actionLabel}
        </button>
      )}
    </article>
  )
}
