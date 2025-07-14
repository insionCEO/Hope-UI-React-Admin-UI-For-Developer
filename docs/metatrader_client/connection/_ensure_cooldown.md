# _ensure_cooldown(connection) 💤

Ensures that there is a cooldown period before initializing the MetaTrader 5 terminal (to avoid rapid restarts).

## Parameters
- **connection**: The connection object with cooldown settings.

## Returns
- **None**

## How it works
1. Checks the last initialization time.
2. Waits if necessary to respect cooldown.

## Fun Fact ⏳
Patience is a virtue—even for trading bots! This function keeps things cool (literally).
