# backbone.fileupload_view 

> backbone fileupload view

## Getting Started
Please add the code below to under the key overrides of bower.json 

````
    "blueimp-file-upload": {
      "dependencies": {
        "jquery": ">=1.6",
        "blueimp-load-image": ">=1.9.1",
        "blueimp-canvas-to-blob": ">=2.0.7"
      },
      "main": [
        "js/vendor/jquery.ui.widget.js",
        "js/jquery.fileupload.js",
        "js/jquery.fileupload-process.js",
        "js/jquery.fileupload-ui.js",
        "js/jquery.fileupload-audio.js",
        "js/jquery.fileupload-image.js",
        "js/jquery.fileupload-validate.js",
        "js/jquery.fileupload-video.js",        
        "js/jquery.iframe-transport.js"
      ]  
    }
````

## Documentation
_(Coming soon)_

## Examples
````
    new Backbone.FileUploadView
      el: @$('.testContainer5')
      url: 'http://localhost:8888'
      # acceptFileTypes: /sav/i
      # maxNumberOfFiles: 1
      # 
      done: (e, data) ->
        console.log e, data
        true
      submit: (e, data) ->
        data.formData = {name: 'pic.jpg'}
        true

    # 具体请查看 FileUploadView 源文件
````

## License

Copyright (c) 2013 Fanlia   
Licensed under the MIT license.
