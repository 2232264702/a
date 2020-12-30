layui.use(['laydate', 'form', 'jquery', 'upload'], function() {
	var laydate = layui.laydate;
	var table = layui.table,
		form = layui.form,
		layer = layui.layer,
		element = layui.element,
		$ = layui.jquery,
		upload = layui.upload;

	//拖拽上传
	upload.render({
		elem: '#userFace',
		url: '/boxingmis/api/boxers/upload/img' //改成您自己的上传接口
			,
		before: function(obj) {
			obj.preview(function(index, file, result) {
				$('#userFace').attr('src', result);
				vm.boxer.reserve2 = result;
			});
		},
		done: function(res) {}
	});

	//提交事件
	form.on("submit(changeUser)", function(data) {
		var r = 0;
		var index = layer.msg('提交中，请稍候', {
			icon: 16,
			time: false,
			shade: 0.8
		});
		//获取男女
		if ($("[name=sex]:eq(0)").prop("checked")) {
			vm.boxer.boxersex = 1;
		} else {
			vm.boxer.boxersex = 2;
		}
		console.log( JSON.stringify(vm.boxer))
		//获取拳架
		//vm.boxer.boxerframe = $("#boxerframe").val();
		//获取专业程度
		//vm.boxer.boxerspecialty = $("#boxerspecialty").val();
		//新增
		/*$.ajax('/boxingmis/api/boxers/boxer', {
			type: "post",
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(vm.boxer),
			success: function(res) {
				r = res;
			}
		}, "json");*/
		if (r == 2) {
			layer.close(index);
			layer.msg("提交成功！", {
				icon: 6
			});
		} else {
			layer.close(index);
			layer.msg('提交失败！', {
				icon: 5
			});
		}
		//parent.layer.close(parent.layer.index);
		return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
	})

	function set(){
		
	}
	//选择出生日期
	laydate.render({
		elem: '.userBirthday',
		format: 'yyyy年MM月dd日',
		trigger: 'click',
		max: 0,
		mark: {
			"0-12-15": "生日"
		},
		done: function(value, date) {
			// if(date.month === 12 && date.date === 15){ //点击每年12月15日，弹出提示语
			//     layer.msg('今天是马哥的生日，也是layuicms2.0的发布日，快来送上祝福吧！');
			// }
		}
	});
	//常规用法
	laydate.render({
		elem: '#da'
	});
});



/*vue数据绑定*/
var vm = new Vue({
	el: "#app",
	data() {
		return {
			id: 0,
			boxerdetailsid: 0,
			boxer: {
				boxerarmspread: '',
				boxerdetailsid: '',
				boxerframe: '',
				boxerhistoryid: '',
				boxerid: '',
				boxerintegrate: '',
				boxername: '',
				boxernickname: '',
				boxersex: '',
				boxerspecialty: '',
				boxerstature: '',
				boxerweight: '',
				boxerIntegrate: 0,
				reserve2: '',
				boxerdetails: {
					boxerdetailsbirthdate: '',
					boxerdetailsboxinghall: '',
					boxerdetailscareer: '',
					boxerdetailscoach: '',
					boxerdetailsdeclaration: '',
					boxerdetailsdiseasehistory: '',
					boxerdetailsid: '',
					boxerdetailsidcard: '',
					boxerdetailsnativeplace: '',
					boxerdetailsphone: '',
					boxerdetailsthegameexperience: '',
					boxerdetailsthetrainingtime: '',
					boxerdetailswechat: '',
				}
			}
		};

	},


	methods: {

	},
	created: function() {}
});
