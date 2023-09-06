#!/bin/bash

# Desired directory
REPO_DIR = /etc/www/html/dearly_beloved/DearlyBeloved-Draft-1

# Verify that the payload contains the expected event
EVENT=$(jq --raw-output .event "$1")

if [ "$EVENT" == "push" ]; then
    # Pull the latest changes from the Git repository
    cd "$REPO_DIR" || exit
    git pull orgin master 
    
    # Add any additional commands needed for your deployment process
    systemctl restart nginx 

    # Log the event (optional)
    echo "Webhook event: $EVENT at $(date)" >> /var/log/webhook.log  # Adjust the log path as needed

    # Respond to the request
    echo "Webhook received and repository updated."
else
    echo "Ignoring webhook event: $EVENT"
fi
