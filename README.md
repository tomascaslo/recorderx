# Recorderx

A simple library to record audio using HTML5 Audio API.
___

It depends on [RecorderJS](https://github.com/mattdiamond/Recorderjs) and jQuery.

To start using it:

Add the following lines to your index.html file:
```
<script src="path/to/jquery.js"></script>
<script src="path/to/recorder.js"></script>
<script src="path/to/recorderx.js"></script>
```
Make sure to add the correct path to your js files.

Somewhere in your index.html create an instance of Recorderx:
```
var recorderx;
jQuery(document).ready(function() {
    recorderx = new Recorderx('audio#myRecording');
});
```
The parameter passed to the Recorderx class is the audio element where the recording is going to be loaded.

Add an audio element inside your index.html as well as the buttons to handle start and stop.
```
<input onclick="recorderx.startRecording()" type="button" value="Start"/>
<input onclick="recorderx.stopRecording()" type="button" value="Stop"/>
<audio id="myRecording" controls></audio>
```

That's it!
___

To test the example in here just clone the repo and do:
```
bower install
```

You can run any simple server to view it in action. Ex.:
```
python -m SimpleHTTPServer
```

------

The MIT License (MIT)

Copyright (c) 2015 Tomás Castro López

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.