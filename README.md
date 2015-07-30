# Bus Route Finder
An application for Firefox OS to help you find which buses to take to go to one place from another.

Made with love with HTML5, CSS3, JavaScript, AngularJS and Web Starter Kit.
HTML5 application based purely on Web technologies. Application intended to be used in Firefox OS (should also work in Windows, Linux, Mac OS X and Android if Firefox browser installed).

It uses JSON to store places and buses data.

JSON schema for the system:
	-place(id, name)
	-bus(id,name,route)
	
You enter two locations (from A to B) and the system first checks if it can get you there using one bus.
If this fails, the system tries to find a bus running from A to a changeover location C, and then another bus from that changeover location to B.

# Install from source

* Download and extract content of this repository somewhere on local drive
* Mozilla Firefox > Tools > Web Developer > App Manager
* Add Packaged App
* Choose directory with downloaded and extracted files
* Start Simulator (If you do not have Firefox OS Simulator extension installed yet - you have to install it)
* Press Update in App Manager
* Click "Klif Mozika" icon on home screen inside simulator

# Contribute
Feel free to share some ideas for new features, report any issues, fork and contribute!

# License
GNU GPL v2 license, see LICENCE
