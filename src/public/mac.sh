#!/bin/bash
SETUP_DIR=~/.mac_setup

# Make setup directory
mkdir -p $SETUP_DIR
cd $SETUP_DIR

# Clone or pull git repo (Must be started in background for spinner)
((git clone git@github.com:mcclayton/MacSetup.git . 2> /dev/null) || (git pull --quiet)) &
pid=$! # Process Id of the previous running command

# Show Spinner
spin='-\|/'
i=0
while kill -0 $pid 2>/dev/null
do
  i=$(( (i+1) %4 ))
  printf "\r${spin:$i:1} Preparing Mac Setup..."
  sleep .1
done

# Invoke installation script
./install.sh
