import { useEffect, useMemo, useState, useCallback } from "react"
import FighterCard from "./components/FighterCard"
import TeamPanel from "./components/TeamPanel"

const STARTING_BUDGET = 100

const INITIAL_ROSTER = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]

export default function App() {
  // State: user's picks and remaining budget
  const [team, setTeam] = useState(() => {
    const saved = localStorage.getItem("team")
    return saved ? JSON.parse(saved) : []
  })
  const [budget, setBudget] = useState(() => {
    const saved = localStorage.getItem("budget")
    return saved ? JSON.parse(saved) : STARTING_BUDGET
  })

  // Maintain a separate list of available fighters derived from initial set minus team, avoiding duplicating data sources in state.
  const availableRoster = useMemo(() => {
    const pickedIds = new Set(team.map(f => f.id))
    return INITIAL_ROSTER.filter(f => !pickedIds.has(f.id))
  }, [team])

  // Persist decisions across refreshes
  useEffect(() => {
    localStorage.setItem("team", team)
  }, [team])

  useEffect(() => {
    localStorage.setItem("budget", budget)
  }, [budget])

  const totals = useMemo(() => {
    const strength = team.reduce((acc, f) => acc + f.strength, 0)
    const agility = team.reduce((acc, f) => acc + f.agility, 0)
    return { strength, agility }
  }, [team])

  const addFighter = useCallback((fighter) => {
    if (budget < fighter.price) {
      console.log("Not enough budget to recruit:", fighter.name)
      return
    }
    setTeam(prev => [...prev, fighter])
    setBudget(prev => prev - fighter.price)
  }, [budget])

  const removeFighter = useCallback((fighter) => {
    setTeam(prev => prev.filter(f => f.id !== fighter.id))
    setBudget(prev => prev + fighter.price)
  }, [])

  return (
    <div className="app">
      <header>
        <h1>Zombie Team Builder</h1>
        <div className="meta">
          <span><strong>Budget:</strong> ${budget} </span>
          <span><strong>Strength:</strong> {totals.strength} </span>
          <span><strong>Agility:</strong> {totals.agility} </span>
        </div>
      </header>

      <main className="layout">
        <section>
          <h2>Available Recruits</h2>
          <ul className="cards">
            {availableRoster.map((fighter) => (
              <li key={fighter.id} className="card">
                <FighterCard
                  fighter={fighter}
                  actionLabel="Add to Team"
                  onAction={() => addFighter(fighter)}
                  disabled={budget < fighter.price}
                  title={budget < fighter.price ? "Insufficient budget" : "Recruit"}
                />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <TeamPanel team={team} onRemove={removeFighter} />
        </section>
      </main>
    </div>
  )
}
