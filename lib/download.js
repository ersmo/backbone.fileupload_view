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