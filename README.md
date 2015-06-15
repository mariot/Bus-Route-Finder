# bus-route-finder
A web application that lets you find buses from A to B in Madagascar. 

Made with love with HTML5, JavaScript, AngularJS and Web Starter Kit.

It uses JSON to store places and buses data.

JSON schema for the system:
	-place(id, name)
	-bus(id,name,route)
	
You enter two locations (from A to B) and the system first checks if it can get you there using one bus.
If this fails, the system tries to find a bus running from A to a changeover location C, and then another bus from that changeover location to B.

This software is released under the GNU GPL2.
