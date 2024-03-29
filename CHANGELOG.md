<!--
Guiding Principles:

Changelogs are for humans, not machines.
There should be an entry for every single version.
The same types of changes should be grouped.
Versions and sections should be linkable.
The latest version comes first.
The release date of each version is displayed.
Mention whether you follow Semantic Versioning.

Usage:

Change log entries are to be added to the Unreleased section under the
appropriate stanza (see below). Each entry should ideally include a tag and
the Github issue reference in the following format:

* (<tag>) \#<issue-number> message

    The issue numbers will later be link-ified during the release process so you do
    not have to worry about including a link manually, but you can if you wish.

    Types of changes (Stanzas):

    "Features" for new features.
    "Improvements" for changes in existing functionality.
    "Deprecated" for soon-to-be removed features.
    "Bug Fixes" for any bug fixes.
    "Client Breaking" for breaking Protobuf, gRPC and REST routes used by end-users.
    "CLI Breaking" for breaking CLI commands.
    "API Breaking" for breaking exported APIs used by developers building on SDK.
    "State Machine Breaking" for any changes that result in a different AppState given same genesisState and txList.
    Ref: https://keepachangelog.com/en/1.0.0/
    -->

# Changelog

## [v0.3.0]
- New Chain Features
  - Scheduled Runs can now be registered up to 5,000,000 blocks (~2 months) in the future (previously ~1 hour)
  - Added NFTS:
    - Name owners can now create unlimited NFT Classes (collections) of that name or subnames (think subdomain)
 - Names:
   - Name are now registered for 1% for 31,536,000 blocks (~1year) 
   - Names can new be renewed automatically at the expiration height
 - Added Interchain Accounts!
   - https://ibc.cosmos.network/main/apps/interchain-accounts/overview.html
   - Use scripts to register and control addresses on other chains
     - for ex all from within a Script
     - use IBC interchain accounts to register an account on Osmosis
     - IBC transfer funds from Dyson -> Osmosis
     - use IBC interchain accounts to send a TX (like swap or exit pool)
     - IBC transfer funds from Osmosis -> Dyson
     - this is extremely powerful when combined with ScheduledRuns
 - Cosmos SDK Events can be emitted from a script with dys.emit_event(key, value)
 - Added `raise_on_error` argument to `_chain` to reduce `assert result['error' is None`
- Added UI
  - Script Code editor can be resized to fit your screen better  
  - Scheduling running functions directly on the function form
  - List all ScheduledRuns for an address
  - Registering a Name
  - Asset page listing all the Names, Coins, and NFTs for an address
  - Listing all Names
  - Form for minting coins
  - form for minting NFTs
  - Detail view of Name with related Coin denoms and NFC Classes
  - Forms for sending coins and NFTs
- API
 - /_/node_info now returns the current script address or name
 - Improved error UI for Out Of Gas errors
 - 


### Bug Fixes

* (frontend) [#55](https://gitlab.com/dysonproject/dyson/-/issues/55) Fix async issue with DysonLoader
* (frontend) [#52](https://gitlab.com/dysonproject/dyson/-/issues/52) Label testnet in keplr conncetion
* (frontend) [#55](https://gitlab.com/dysonproject/dyson/-/issues/55) Fix race condition with DysonLoader
* (dyslang) [#59](https://gitlab.com/dysonproject/dyson/-/issues/59) Stop force snake_casing rpc commands internally

### State Machine Breaking
* (dyslang) [#61](https://gitlab.com/dysonproject/dyson/-/issues/61) Fix error message for ExtraLines permission
* (dyslang) [#51](https://gitlab.com/dysonproject/dyson/-/issues/51) Fix function annotation for texareas
* (dyslang) [#54](https://gitlab.com/dysonproject/dyson/-/issues/54) Rename dyson/sendMsgCreateScript to dyson/sendMsgDeployAutonomousScript

### Improvements

* (frontend) [#53](https://gitlab.com/dysonproject/dyson/-/issues/53) Improve UI for code example in /commands
* (frontend) [#57](https://gitlab.com/dysonproject/dyson/-/issues/57) Remove unused Starport CSS

### Features
* (frontend) [#58](https://gitlab.com/dysonproject/dyson/-/issues/58) Enable forms for Protobuf Any in /commands

