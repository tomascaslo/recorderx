jQuery(document).ready(function() {
  window.Recorderx = (function($, Rec) {
    navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia;

    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    if (hasGetUserMedia()) {
      function Recorderx(elem) {
        var self = this;

        if (typeof elem !== 'string') {
          throw new Error('Audio element selector should be a string.');
        }

        self.audioElem = $(elem);

        if (!self.audioElem) {
          throw new Error('No audio element selected or element doesn\'t exist.');
        }

        if (self.audioElem[0].tagName !== 'AUDIO') {
          throw new Error('Element should be an audio element.');
        }

        self.startRecording = function() {
          navigator.getUserMedia({ audio: true }, onSuccess, onFail);
        };

        self.stopRecording = function() {
          self.recorder.stop();
          self.recorder.exportWAV(function(stream) {
            self.audioElem.attr('src', function() {
              return window.URL.createObjectURL(stream);
            });
          });
        };

        function onSuccess(stream) {
          var context = new AudioContext();
          var mediaStreamSource = context.createMediaStreamSource(stream);
          self.recorder = new Rec(mediaStreamSource, { workerPath: 'bower_components/Recorderjs/recorderWorker.js' });
          self.recorder.record();
        }

        function onFail() {
          throw new Error('Failed to record audio.')
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
