/**
 * Created by MSI on 2017/3/16.
 */
mrmedia.controller('SignupCtrl', ['$scope',function($scope) {
    // alert("12345");
    // 文件上传框
    $("#uploadfile").fileinput({
        language: 'zh', //设置语言
        uploadUrl: "img/update.json", //上传的地址
        allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件后缀
        //uploadExtraData:{"id": 1, "fileName":'123.mp3'},
        uploadAsync: true, //默认异步上传
        showUpload: false, //是否显示上传按钮
        showRemove : true, //显示移除按钮
        showPreview : true, //是否显示预览true
        showCaption: false,//是否显示标题
        browseClass: "btn btn-primary", //按钮样式
        dropZoneEnabled: false,//是否显示拖拽区域
        //minImageWidth: 50, //图片的最小宽度
        //minImageHeight: 50,//图片的最小高度
        //maxImageWidth: 1000,//图片的最大宽度
        //maxImageHeight: 1000,//图片的最大高度
        maxFileSize: 100,//单位为kb，如果为0表示不限制文件大小
        //minFileCount: 0,
        maxFileCount: 1, //表示允许同时上传的最大文件个数
        enctype: 'multipart/form-data',
        validateInitialCount:true,
        previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
    }).on("filebatchselected", function(event, files) {
        $(this).fileinput("upload");
    }).on("fileuploaded", function(event, data) {
            alert('123');
            if(data.response)
            {
                alert('处理成功');
                var file = data.reader.result;
                var filename = data.files[0].name;
                var type = data.files[0].type;
                var size = data.files[0].type;
                // we can use ajax.
            }
        });


    // $('.avatar-input').change(function(event) {
    //     // 根据这个 <input> 获取文件的 HTML5 js 对象
    //     var files = event.target.files, file;
    //     if (files && files.length > 0) {
    //         // 获取目前上传的文件
    //         file = files[0];
    //         // 来在控制台看看到底这个对象是什么
    //         console.log(file);
    //         // 那么我们可以做一下诸如文件大小校验的动作
    //         if(file.size > 1024 * 1024 * 2) {
    //             alert('图片大小不能超过 2MB!');
    //             return false;
    //         }
    //         console.log(file);
    //         // !!!!!!
    //         // 下面是关键的关键，通过这个 file 对象生成一个可用的图像 URL
    //         // 获取 window 的 URL 工具
    //         var URL = window.URL || window.webkitURL;
    //         // 通过 file 生成目标 url
    //         var imgURL = URL.createObjectURL(file);
    //         // 使用下面这句可以在内存中释放对此 url 的伺服，跑s了之后那个 URL 就无效了
    //         // URL.revokeObjectURL(imgURL);
    //         $('#avatarImg').cropper('replace',imgURL);
    //         console.log(imgURL);
    //     }
    // });
    //
    //
    //
    // var option = {
    //     preview: '.avatar-preview',
    //     aspectRatio: 1,
    //     guides: false
    // };
    //
    // $('#avatarImg').cropper(option);
    $scope.user= {

    }

    $scope.upload = function(){
        $('#avatarImg').toDataURL()
        var _url = $('#target')[0].children[0].src;
        alert(_url);
    }
    $scope.signup = function(){
        //we have two interface for signup. one for signup,the other for file upload
        alert('test:' + $scope.user);
        var user = $scope.user;
    };

}]);
