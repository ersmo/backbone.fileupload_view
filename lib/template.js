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