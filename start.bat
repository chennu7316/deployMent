@echo off
start cmd /k "cd api && npm install --force && npm run start:dev"
cd portal && npm install && npm run dev