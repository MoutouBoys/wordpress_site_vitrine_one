!function(e){e(document).ready(function(){e(".accron-btn-get-started").on("click",function(t){t.preventDefault(),e(this).html("Processing.. Please wait").addClass("updating-message");var n={action:"install_act_plugin",nonce:accron_ajax_object.nonce};e.post(accron_ajax_object.ajax_url,n,function(e){location.href="customize.php?accron_notice=dismiss-get-started"})}),e(document).on("click",".notice-get-started-class .notice-dismiss",function(){var t={action:"accron_dismissed_notice_handler",type:e(this).closest(".notice-get-started-class").data("notice"),nonce:accron_ajax_object.nonce};e.ajax({type:"POST",url:accron_ajax_object.ajax_url,data:t,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",accron_ajax_object.nonce)}})})})}(jQuery);