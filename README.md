# Project plan

## About

This is be a memory card game. The user flips cards to find a matching pair.

## Setup

- Configure Deno - prettier and such, linting command
- Delete unnecessary files
- Uninstall unnecessary packages

## App

### Visuals

- Symbols on cards - coding languages. List of coding languages: `C++`, `C#`, `JavaScript`, `TypeScript`, `Python`, `PHP`, `Go`, `Rust`.
- When card is un-flipped, should show `?`.
- Game deck - table with buttons that flip images
- Background - non-white color

### Game mechanics and logic

- When the user clicks on a card, the card "flips", revealing the "correct" symbol
- Card state might be saved in a hook
- When all cards are flipped, you get a modal with "Congrats" and a button to start again
- Game deck is an html table

### Finishing touches

- Change tab icon
