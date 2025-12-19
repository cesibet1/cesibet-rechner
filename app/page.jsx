'use client'
import { useState, useEffect } from 'react'

export default function CesiBetRechner() {
  const [bankroll, setBankroll] = useState(1000)

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.expand()
    }
  }, [])

  const e1 = bankroll * 0.005
  const e2 = bankroll * 0.0225const e3 = bankroll * 0.0725

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ background: '#fff', borderRadius: 20, padding: 20, width: '100%', maxWidth: 360 }}>
        <h2 style={{ textAlign: 'center' }}>CesiBet Einsatz Rechner</h2>

        <input
          type="number"
          value={bankroll}
          onChange={e => setBankroll(Number(e.target.value))}
          style={{ width: '100%', padding: 12, fontSize: 18, marginBottom: 16 }}
        />

        <p>1. Drittel (0,5 %): <b>{e1.toFixed(2)} €</b></p>
        <p>2. Drittel (2,25 %): <b>{e2.toFixed(2)} €</b></p>
        <p>3. Drittel (7,25 %): <b>{e3.toFixed(2)} €</b></p>

        <hr /><p><b>Max. Risiko:</b> {(e1 + e2 + e3).toFixed(2)} €</p>
      </div>
    </div>
  )
}
