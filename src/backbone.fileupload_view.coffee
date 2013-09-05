
class Backbone.FileUploadView extends Backbone.View

  template: JST.blueimp_file_upload_template

  upload: JST.blueimp_file_upload_upload

  download: JST.blueimp_file_upload_download

  upload_events: ['add', 'submit', 'send', 'done', 'fail', 'always', 'progress', 'progressall', 'start', 'stop', 'change', 'paste', 'drop', 'dragover', 'chunksend', 'chunkdone', 'chunkfail', 'chunkalways']

  defaults:
    maxFileSize: null
    acceptFileTypes: null
    maxNumberOfFiles: null
    done: null

  initialize: ->
    @options = _.defaults @options, @defaults
    @render()

  render: =>
    @$el.html @template @options
    fp = @$('#fileupload').fileupload
      url: @options.url
      maxFileSize: @options.maxFileSize
      acceptFileTypes: @options.acceptFileTypes
      maxNumberOfFiles: @options.maxNumberOfFiles
      uploadTemplate: (o) => @upload o: o
      downloadTemplate: (o) => @download o: o
 
    fp.on 'fileupload' + k, v for k, v of @options when k in @upload_events
    
    this

# More options, pleasr ref
# https://github.com/blueimp/jQuery-File-Upload/wiki/Options