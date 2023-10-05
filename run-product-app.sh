#!/bin/bash

# Default ports
BACKEND_PORT=3000
FRONTEND_PORT=8080

while [[ $# -gt 0 ]]; do
  case "$1" in
    --backend-port)
      BACKEND_PORT="$2"
      shift 2
      ;;
    --frontend-port)
      FRONTEND_PORT="$2"
      shift 2
      ;;
    *)
      echo "Invalid argument: $1"
      exit 1
      ;;
  esac
done

# Running the backend server
(cd server && npm install && npm start -- --port "$BACKEND_PORT") &

# Running the frontend server
(cd client && npm install && REACT_APP_PORT="$FRONTEND_PORT" npm start)

