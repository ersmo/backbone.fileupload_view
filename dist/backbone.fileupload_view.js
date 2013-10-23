this["JST"] = this["JST"] || {};

this["JST"]["blueimp_file_upload_template"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),maxFileSize = locals_.maxFileSize,$ = locals_.$,acceptFileTypes = locals_.acceptFileTypes,maxNumberOfFiles = locals_.maxNumberOfFiles;buf.push("<form id=\"fileupload\" action=\"\" method=\"POST\" enctype=\"multipart/form-data\"><div class=\"row fileupload-buttonbar\"><div class=\"span7\"><span class=\"btn btn-success fileinput-button\"><i class=\"icon-plus icon-white\"></i><span>Add files...</span><input type=\"file\" name=\"files[]\" multiple=\"multiple\"/></span>&nbsp;<button type=\"submit\" class=\"btn btn-primary start\"><i class=\"icon-upload icon-white\"></i><span>Start upload</span></button>&nbsp;<button type=\"reset\" class=\"btn btn-warning cancel\"><i class=\"icon-ban-circle icon-white\"></i><span>Cancel upload</span></button>&nbsp;<button type=\"button\" class=\"btn btn-danger delete\"><i class=\"icon-trash icon-white\"></i><span>Delete</span></button>&nbsp;<input type=\"checkbox\" class=\"toggle\"/>&nbsp;<span class=\"fileupload-loading\"></span></div><div class=\"span5 fileupload-progress fade\"><div role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress progress-success progress-striped active\"><div style=\"width: 0%;\" class=\"bar\"></div></div><div class=\"progress-extended\"> </div></div></div><table role=\"presentation\" class=\"table table-striped\"><tbody data-toggle=\"modal-gallery\" data-target=\"#modal-gallery\" class=\"files\"></tbody></table></form><div class=\"well well-small\"><h4>Notes</h4><ul>");
if ( maxFileSize)
{
buf.push("<li>The maximum file size for uploads in this page is &nbsp;<strong>" + (jade.escape(null == (jade.interp = $.blueimp.fileupload.prototype._formatFileSize(maxFileSize)) ? "" : jade.interp)) + "</strong>.</li>");
}
if ( acceptFileTypes)
{
buf.push("<li>Only type (&nbsp;<strong>" + (jade.escape(null == (jade.interp = acceptFileTypes ) ? "" : jade.interp)) + "</strong>&nbsp;) are allowed in this page.</li>");
}
if ( maxNumberOfFiles)
{
buf.push("<li>Only&nbsp;<strong>" + (jade.escape(null == (jade.interp = maxNumberOfFiles ) ? "" : jade.interp)) + "</strong>&nbsp;file(s) are allowed in this page.   </li>");
}
buf.push("<li>You can&nbsp;<strong>drag & drop</strong>&nbsp;files from your desktop on this webpage with Google Chrome, Mozilla Firefox and Apple Safari.</li></ul></div>");;return buf.join("");
};
this["JST"] = this["JST"] || {};

this["JST"]["blueimp_file_upload_download"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),o = locals_.o;// iterate o.files
;(function(){
  var $$obj = o.files;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var file = $$obj[i];

buf.push("<tr class=\"template-download fade\"><td><span class=\"preview\">");
if ( file.thumbnail_url)
{
buf.push("<a" + (jade.attrs({ 'href':(file.url), 'title':(file.name), 'data-gallery':('gallery'), 'download':(file.name) }, {"href":true,"title":true,"data-gallery":true,"download":true})) + "><img" + (jade.attrs({ 'src':(file.thumbnail_url) }, {"src":true})) + "/></a>");
}
buf.push("</span></td><td><p class=\"name\"><a" + (jade.attrs({ 'href':(file.url), 'title':(file.name), 'data-gallery':("" + (file.thumbnail_url && 'gallery') + ""), 'download':(file.name) }, {"href":true,"title":true,"data-gallery":true,"download":true})) + ">" + (jade.escape(null == (jade.interp = file.name) ? "" : jade.interp)) + "</a></p>");
if ( file.error)
{
buf.push("<div><span class=\"label label-important\">Error</span>" + (jade.escape((jade.interp = file.error) == null ? '' : jade.interp)) + "</div>");
}
buf.push("</td><td><span class=\"size\">" + (jade.escape(null == (jade.interp = o.formatFileSize(file.size)) ? "" : jade.interp)) + "</span></td><td>");
if ( file.delete_type && file.delete_url)
{
buf.push("<button" + (jade.attrs({ 'data-type':(file.delete_type), 'data-url':(file.delete_url), 'if':('if'), "class": [('btn'),('btn-danger'),('delete')] }, {"data-type":true,"data-url":true,"if":true})) + "> <!-- data-xhr-fields='{\"withCredentials\":true}'--><i class=\"icon-trash icon-white\"></i><span>Delete</span></button>&nbsp;<input type=\"checkbox\" name=\"delete\" value=\"1\" class=\"toggle\"/>");
}
buf.push("</td><td class=\"after-upload\"><button" + (jade.attrs({ 'data-insert-image':(file.url), "class": [('btn'),('btn-success'),('abc')] }, {"data-insert-image":true})) + ">插入圖片</button></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var file = $$obj[i];

buf.push("<tr class=\"template-download fade\"><td><span class=\"preview\">");
if ( file.thumbnail_url)
{
buf.push("<a" + (jade.attrs({ 'href':(file.url), 'title':(file.name), 'data-gallery':('gallery'), 'download':(file.name) }, {"href":true,"title":true,"data-gallery":true,"download":true})) + "><img" + (jade.attrs({ 'src':(file.thumbnail_url) }, {"src":true})) + "/></a>");
}
buf.push("</span></td><td><p class=\"name\"><a" + (jade.attrs({ 'href':(file.url), 'title':(file.name), 'data-gallery':("" + (file.thumbnail_url && 'gallery') + ""), 'download':(file.name) }, {"href":true,"title":true,"data-gallery":true,"download":true})) + ">" + (jade.escape(null == (jade.interp = file.name) ? "" : jade.interp)) + "</a></p>");
if ( file.error)
{
buf.push("<div><span class=\"label label-important\">Error</span>" + (jade.escape((jade.interp = file.error) == null ? '' : jade.interp)) + "</div>");
}
buf.push("</td><td><span class=\"size\">" + (jade.escape(null == (jade.interp = o.formatFileSize(file.size)) ? "" : jade.interp)) + "</span></td><td>");
if ( file.delete_type && file.delete_url)
{
buf.push("<button" + (jade.attrs({ 'data-type':(file.delete_type), 'data-url':(file.delete_url), 'if':('if'), "class": [('btn'),('btn-danger'),('delete')] }, {"data-type":true,"data-url":true,"if":true})) + "> <!-- data-xhr-fields='{\"withCredentials\":true}'--><i class=\"icon-trash icon-white\"></i><span>Delete</span></button>&nbsp;<input type=\"checkbox\" name=\"delete\" value=\"1\" class=\"toggle\"/>");
}
buf.push("</td><td class=\"after-upload\"><button" + (jade.attrs({ 'data-insert-image':(file.url), "class": [('btn'),('btn-success'),('abc')] }, {"data-insert-image":true})) + ">插入圖片</button></td></tr>");
    }

  }
}).call(this);
;return buf.join("");
};
this["JST"] = this["JST"] || {};

this["JST"]["blueimp_file_upload_upload"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),o = locals_.o;// iterate o.files
;(function(){
  var $$obj = o.files;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var file = $$obj[i];

buf.push("<tr class=\"template-upload fade\"><td><span class=\"preview\"></span></td><td><p class=\"name\">" + (jade.escape(null == (jade.interp = file.name) ? "" : jade.interp)) + "</p>");
if ( file.error)
{
buf.push("<div><span class=\"label label-important\">Error</span>" + (jade.escape((jade.interp = file.error) == null ? '' : jade.interp)) + "</div>");
}
buf.push("</td><td><p class=\"size\">" + (jade.escape(null == (jade.interp = o.formatFileSize(file.size)) ? "" : jade.interp)) + "</p>");
if ( !o.files.error)
{
buf.push("<div role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\" class=\"progress progress-success progress-striped active\"><div style=\"width: 0%;\" class=\"bar\"></div></div>");
}
buf.push("</td><td>");
if ( !o.files.error && !i && !o.options.autoUpload)
{
buf.push("<button class=\"btn btn-primary start\"><i class=\"icon-upload icon-white\"></i><span>Start</span></button>&nbsp;");
}
if ( !i)
{
buf.push("<button class=\"btn btn-warning cancel\"><i class=\"icon-ban-circle icon-white\"></i><span>Cancel</span></button>");
}
buf.push("</td><td class=\"before-upload\"></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var file = $$obj[i];

buf.push("<tr class=\"template-upload fade\"><td><span class=\"preview\"></span></td><td><p class=\"name\">" + (jade.escape(null == (jade.interp = file.name) ? "" : jade.interp)) + "</p>");
if ( file.error)
{
buf.push("<div><span class=\"label label-important\">Error</span>" + (jade.escape((jade.interp = file.error) == null ? '' : jade.interp)) + "</div>");
}
buf.push("</td><td><p class=\"size\">" + (jade.escape(null == (jade.interp = o.formatFileSize(file.size)) ? "" : jade.interp)) + "</p>");
if ( !o.files.error)
{
buf.push("<div role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\" class=\"progress progress-success progress-striped active\"><div style=\"width: 0%;\" class=\"bar\"></div></div>");
}
buf.push("</td><td>");
if ( !o.files.error && !i && !o.options.autoUpload)
{
buf.push("<button class=\"btn btn-primary start\"><i class=\"icon-upload icon-white\"></i><span>Start</span></button>&nbsp;");
}
if ( !i)
{
buf.push("<button class=\"btn btn-warning cancel\"><i class=\"icon-ban-circle icon-white\"></i><span>Cancel</span></button>");
}
buf.push("</td><td class=\"before-upload\"></td></tr>");
    }

  }
}).call(this);
;return buf.join("");
};
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
