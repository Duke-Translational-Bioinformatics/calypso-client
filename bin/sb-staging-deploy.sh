#!/bin/bash
ssh deployer@calypso-qa.sbox.es 'cd calypso-client && git fetch --all && git reset --hard origin/feature/ie11-support && pm2 restart pm2-run-client'
