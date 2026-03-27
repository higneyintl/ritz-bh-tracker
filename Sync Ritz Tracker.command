#!/bin/bash
# Double-click this file to sync the Ritz tracker
cd "$(dirname "$0")"
echo ""
echo "  Syncing Ritz Carlton BH Tracker..."
echo ""
python3 sync.py --pause
