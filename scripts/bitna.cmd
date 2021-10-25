@echo off

title bitna 

:: Following flags applied 

if [%1] == [] echo "Usage: bitna <command>"

if "%1" == "install" echo "Running command install"

if "%1" == "run" echo "Running bitna application"
