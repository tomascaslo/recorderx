jQuery(document).ready(function() {
  window.Recorderx = (function($, Rec) {
    navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    if (hasGetUserMedia()) {
      function Recorderx(elem) {
        var audioElem;
        var recorder;

        if (typeof elem !== 'string') {
          throw new Error('Audio element selector should be a string.');
        }

        audioElem = $(elem);

        if (!audioElem) {
          throw new Error('No audio element selected or element doesn\'t exist.');
        }

        if (audioElem[0].tagName !== 'AUDIO') {
          throw new Error('Element should be an audio element.');
        }

        this.startRecording = function() {
          navigator.getUserMedia({ audio: true }, onSuccess, onFail);
        };

        this.stopRecording = function() {
          recorder.stop();
          recorder.exportWAV(function(stream) {
            audioElem.attr('src', function() {
              return window.URL.createObjectURL(stream);
            });
          });
        };

        function onSuccess(stream) {
          var context = new AudioContext();
          var mediaStreamSource = context.createMediaStreamSource(stream);
          recorder = new Rec(mediaStreamSource, { workerPath: 'bower_components/Recorderjs/recorderWorker.js' });
          recorder.record();
        }

        function onFail() {
          console.log('Rejected!');
        }
      }

      return Recorderx;
    } else {
      return false;
    }

    function hasGetUserMedia() {
      return !!navigator.getUserMedia && !!window.AudioContext;
    }
  })(jQuery, Recorder);
});
