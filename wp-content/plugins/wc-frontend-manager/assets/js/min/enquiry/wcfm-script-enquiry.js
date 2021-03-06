$wcfm_enquiry_table = "";
var enquiryBoardRefrsherTime = "";
jQuery(document).ready(function ($) {
    $enquiry_product = "";
    $enquiry_vendor = "";
    $report_for = "";
    $wcfm_enquiry_table = $("#wcfm-enquiry").DataTable({
        processing: !0,
        serverSide: !0,
        responsive: !0,
        pageLength: parseInt(dataTables_config.pageLength),
        language: $.parseJSON(dataTables_language),
        columns: [{ responsivePriority: 1 }, { responsivePriority: 2 }, { responsivePriority: 3 }, { responsivePriority: 4 }, { responsivePriority: 5 }, { responsivePriority: 6 }, { responsivePriority: 7 }, { responsivePriority: 2 }],
        columnDefs: [
            { targets: 0, orderable: !1 },
            { targets: 1, orderable: !1, visible : false },
            { targets: 2, orderable: !1 },
            { targets: 3, orderable: !1 },
            { targets: 4, orderable: !1 },
            { targets: 5, orderable: !1 },
            { targets: 6, orderable: !1 },
            { targets: 7, orderable: !1 },
        ],
        ajax: {
            type: "POST",
            url: wcfm_params.ajax_url,
            data: function (d) {
                (d.action = "wcfm_ajax_controller"),
                    (d.controller = "wcfm-enquiry"),
                    (d.enquiry_product = $enquiry_product),
                    (d.enquiry_vendor = $enquiry_vendor),
                    (d.filter_date_form = $filter_date_form),
                    (d.filter_date_to = $filter_date_to);
            },
            complete: function () {
                initiateTip();
                $(document.body).trigger("updated_wcfm-enquiry");
            },
        },
    });
    $(document.body).on("updated_wcfm-enquiry", function () {
        $.each(wcfm_enquiry_screen_manage, function (column, column_val) {
            $wcfm_enquiry_table.column(column).visible(!1);
        });
    });
    $(document.body).on("wcfm-date-range-refreshed", function () {
        $wcfm_enquiry_table.ajax.reload();
    });
    if ($("#enquiry_product").length > 0) {
        $("#enquiry_product")
            .on("change", function () {
                $enquiry_product = $("#enquiry_product").val();
                $wcfm_enquiry_table.ajax.reload();
            })
            .select2($wcfm_product_select_args);
    }
    if ($("#dropdown_vendor").length > 0) {
        $("#dropdown_vendor")
            .on("change", function () {
                $enquiry_vendor = $("#dropdown_vendor").val();
                $wcfm_enquiry_table.ajax.reload();
            })
            .select2($wcfm_vendor_select_args);
    }
    $(document.body).on("updated_wcfm-enquiry", function () {
        $(".wcfm_enquiry_delete").each(function () {
            $(this).click(function (event) {
                event.preventDefault();
                var rconfirm = confirm(wcfm_dashboard_messages.enquiry_delete_confirm);
                if (rconfirm) deleteWCFMEnquiry($(this));
                return !1;
            });
        });
    });
    function deleteWCFMEnquiry(item) {
        jQuery("#wcfm_enquiry_listing_expander").block({ message: null, overlayCSS: { background: "#fff", opacity: 0.6 } });
        var data = { action: "delete_wcfm_enquiry", enquiryid: item.data("enquiryid") };
        jQuery.ajax({
            type: "POST",
            url: wcfm_params.ajax_url,
            data: data,
            success: function (response) {
                if ($wcfm_enquiry_table) $wcfm_enquiry_table.ajax.reload();
                jQuery("#wcfm_enquiry_listing_expander").unblock();
            },
        });
    }
    function enquiryBoardRefrsher() {
        if (wcfm_enquiry_auto_refresher.is_allow) {
            clearTimeout(enquiryBoardRefrsherTime);
            enquiryBoardRefrsherTime = setTimeout(function () {
                $wcfm_enquiry_table.ajax.reload();
                enquiryBoardRefrsher();
            }, wcfm_enquiry_auto_refresher.duration);
        }
    }
    enquiryBoardRefrsher();
    if ($(".wcfm_filters_wrap").length > 0) {
        $(".dataTable").before($(".wcfm_filters_wrap"));
        $(".wcfm_filters_wrap").css("display", "inline-block");
    }
});
