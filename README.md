# realtimeDataVis


This is a minimalistic example on how to use sockets for realtime data delivery. In this scenario a microcontroller is periodically sending its temperature reading to a server running node.js. The server then broadcasts the received temperature reading to every client that is connected to the server. Here, the client is a webbrowser that is using the realtime data to visualize it in a plot.

Depedencies: plotly, socket.io
