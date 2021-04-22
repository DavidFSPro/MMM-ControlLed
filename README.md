# Module: MMM-ControlLed

This is an extension for the [MagicMirror](https://github.com/sdetweil/MagicMirror_scripts) . It is a simple module for flashing an LED with an independently adjustable on/off time and a display of the LED status on the MM

It sends a notification to the [MMM-Pins](https://github.com/PtrBld/MMM-Pins) module so that it switches the led on and off, you must therefore indicate in the `config/config.js`  file the name of this notification, it must be the same as the one set for the MMM-Pins module.

## Installation
Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/DavidFSPro/MMM-ControlLed.git`. A new folder will appear navigate into it.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: 
[
	{
		module: "MMM-ControlLed",
        position: "top_right",
		config:
		{
			NameComposant: "Led",
            delaiLOn:2,
			delaiLOff:2,
            notificationMMMPins:"SWITCH_LED",
		}
	},
]
````

## Configuration options
### Basic

The following properties can be configured:

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>NameComposant</code></td>
			<td>name of the component, you can also put the pin number (e.g. LED23)<br>
				<br><b>default value : </b>"Led"
			</td>
            <td><code>delaiLOn</code></td>
			<td>LED ON delay<br>
				<br><b>default value : </b>2
			</td>
            <td><code>delaiLOff</code></td>
			<td>LED OFF delay<br>
				<br><b>default value : </b>2
			</td>
            <td><code>notificationMMMPins</code></td>
			<td>notification for the MMM-Pins module (<b>the notification must be the same as for the MMM-Pins module</b>)<br>
				<br><b>default value : </b>"SWITCH_LED"
			</td>
		</tr>
	</tbody>
</table>

## Dependencies
- [MMM-Pins](https://github.com/PtrBld/MMM-Pins)
- [onoff](https://www.npmjs.com/package/onoff) (installed via `npm install`)

The MIT License (MIT)
=====================

Copyright © 2021 **David** / **FabLab LabHidouille by Familles Solidaires**

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**