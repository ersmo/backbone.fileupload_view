(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Backbone.FileUploadView = (function(_super) {
    __extends(FileUploadView, _super);

    function FileUploadView() {
      this.render = __bind(this.render, this);
      _ref = FileUploadView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FileUploadView.prototype.template = JST.blueimp_file_upload_template;

    FileUploadView.prototype.upload = JST.blueimp_file_upload_upload;

    FileUploadView.prototype.download = JST.blueimp_file_upload_download;

    FileUploadView.prototype.upload_events = ['add', 'submit', 'send', 'done', 'fail', 'always', 'progress', 'progressall', 'start', 'stop', 'change', 'paste', 'drop', 'dragover', 'chunksend', 'chunkdone', 'chunkfail', 'chunkalways'];

    FileUploadView.prototype.defaults = {
      maxFileSize: null,
      acceptFileTypes: null,
      maxNumberOfFiles: null,
      done: null,
      template: null,
      uploadTemplate: null,
      downloadTemplate: null
    };

    FileUploadView.prototype.initialize = function() {
      this.options = _.defaults(this.options, this.defaults);
      return this.render();
    };

    FileUploadView.prototype.render = function() {
      var fp, k, v, _ref1,
        _this = this;
      this.$el.html((this.options.template || this.template)(this.options));
      fp = this.$('#fileupload').fileupload({
        url: this.options.url,
        maxFileSize: this.options.maxFileSize,
        acceptFileTypes: this.options.acceptFileTypes,
        maxNumberOfFiles: this.options.maxNumberOfFiles,
        uploadTemplate: function(o) {
          return (_this.options.uploadTemplate || _this.upload)({
            o: o
          });
        },
        downloadTemplate: function(o) {
          return (_this.options.downloadTemplate || _this.download)({
            o: o
          });
        }
      });
      _ref1 = this.options;
      for (k in _ref1) {
        v = _ref1[k];
        if (__indexOf.call(this.upload_events, k) >= 0) {
          fp.on('fileupload' + k, v);
        }
      }
      return this;
    };

    return FileUploadView;

  })(Backbone.View);

}).call(this);
