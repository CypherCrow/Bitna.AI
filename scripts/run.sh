#!/bin/bash

# To automate activation of Python virtual environment, and installation of Python and JavaScript if not there already

if []
then 
    echo "It seems one or none of the dependences are installed. Run script 'install' to do so."
fi 

echo "Activating Python virtual environment..."
source ./bitna_env/Scripts/activate

echo "Running Django server"
