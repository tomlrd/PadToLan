# PadToLan

Originally created for Star Citizen, PadToLan is a customizable TouchPad (size, design, ux...) designed for deployment on local area networks (LAN). It provides easy access to any devices connected to the private network, offering a convenient solution for controlling multiple devices seamlessly.

<img src="https://raw.githubusercontent.com/tomlrd/PadToLan/main/screen.png" alt="PadToLan screenshot" width="1200"/>

## Features

- **Customizable TouchPad:** Tailor the TouchPad according to your preferences for a personalized user experience.
- **LAN Deployment:** Access devices within your private network effortlessly, enhancing productivity and control.
- **KeyBinds Replication on host:** Configurable keybinds, doubletap, hold and loop.
- **NoSleep:** Prevents the device from going to sleep.
- **NoNav:** Hide navigation bar, you can still swap your pages.
- **IP Whitelist:** (Options) Restrict connection to an IP whitelist (leave empty to allow everyone).
- **Multi layouts:** (Options) All your layouts are available; choose one to display.

Come with an example for StarCitizen 4.0 ready to play.

### Usage

- Download latest release: https://github.com/tomlrd/PadToLan/releases/latest

## FAQ

**Q:** I see a warning on Windows, I don't trust the executable, etc.

**A:** I won’t pay for a certificate for my side projects (~400$/y). You can always install the app on a VM and unpack it using Asar (or build it yourself). The app is not locked, and even the DevTools is available (CTRL + SHIFT + I).

PLEASE DOUBLE CHECK IF THE PORT YOU'LL USE IS NOT OPEN ON PUBLIC NETWORK.

A quick way to verify is to start the server (RUN button), connect using my_public_ip:my_port. If you can access the pad, it means the port is publicly open.
