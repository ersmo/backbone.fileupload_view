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