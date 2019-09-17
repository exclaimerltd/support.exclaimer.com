/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {

var redirects = {
    "/forums/2-knowledge-base/topics/753-outlook-may-hang-when-using-mcafee-virusscan-with-on-access-scan-enabled/":"/hc/en-gb/articles/360004514191-Outlook-may-hang-when-using-McAfee-VirusScan-with-On-Access-Scan-enabled",
    "/topic/543871-remove-existing-outlook-signatures-using-a-group-policy-object/":"/hc/en-gb/articles/360004462812-Disable-existing-Microsoft-Outlook-signatures-using-a-Group-Policy-Object",
    "/topic/543907-messages-that-are-sent-on-behalf-of-use-the-disclaimer-details-from-the-assistant/":"/hc/en-gb/articles/360004411911-How-to-update-a-sent-item-which-was-sent-as-another-user-in-Signature-Manager-Exchange-Edition",
    "/topic/596460-why-is-my-exchange-server-converting-emails-into-plain-text/":"/hc/en-gb/articles/360004462211-Emails-sent-in-HTML-format-are-received-in-Plain-Text-format",
    "/topic/767973-signatures-for-office-365-and-connectors-in-office-365/":"/hc/en-gb/articles/360019586992-Setup-Overview-Exclaimer-Cloud-Signatures-For-Office-365-",
    "/topics/1001-ews-connectivity-test-fails-with-501-not-implemented-error/":"/hc/en-gb/articles/360004511031-EWS-connectivity-test-fails-with-501-Not-Implemented-Error",
    "/topics/515-signature-manager-exchange-edition-remote-deployment-service/":"/hc/en-gb/articles/360004470071-Remote-Deployment-Configuration-Synchronisation",
    "/topics/627-the-outlook-add-in-loads-slowly-on-a-computer-that-has-no-internet-connection/":"/hc/en-gb/articles/360004492272-The-Outlook-Add-In-loads-slowly-on-a-computer-that-has-no-Internet-connection",
    "/topics/730-disable-existing-microsoft-outlook-signatures-using-a-group-policy-object/":" /hc/en-gb/articles/360004462812-Disable-existing-Microsoft-Outlook-signatures-using-a-Group-Policy-Object",
    "/topics/739-how-to-set-up-an-iphone-to-always-send-in-html/":"/hc/en-gb/articles/360004327732-How-to-setup-an-iPhone-to-always-send-in-HTML",
    "/topics/846-images-in-the-email-signature-are-not-displayed-when-the-email-is-received/":"/hc/en-gb/articles/360004502571-Images-in-the-email-signature-are-not-displayed-when-the-email-is-received"
}

for (var redirect in redirects)
{
    if (window.location.href.indexOf(redirect) > -1)
    {
        window.location.href = 'https://support.exclaimer.com/' + redirects[redirect]
    }
}
	
  var dropzoneId = 'pI9ntA_8cBhqTzB3rZtWAhcgfvJs24Kf6xCNAKAEDx8';

  //Create a new instance.
  var sendsafely = new SendSafelyZendesk(dropzoneId);
  sendsafely.initialize();

  //Point Category to external link

	$("<li><a></a></li>")
	.find("a")
	.attr("href", "https://cloudsupport.exclaimer.com") // link
	.html("Exclaimer Cloud: Signature for G Suite") // Title in english
	.end()
	.appendTo("ul.category-list");

  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
    $commentContainerFormControls = $(".comment-form-controls, .comment-ccs");

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  // Expand Request comment form when Add to conversation is clicked
  var $showRequestCommentContainerTrigger = $(".request-container .comment-container .comment-show-container"),
    $requestCommentFields = $(".request-container .comment-container .comment-fields"),
    $requestCommentSubmit = $(".request-container .comment-container .request-submit-comment");

  $showRequestCommentContainerTrigger.on("click", function() {
    $showRequestCommentContainerTrigger.hide();
    $requestCommentFields.show();
    $requestCommentSubmit.show();
    $commentContainerTextarea.focus();
  });

  // Mark as solved button
  var $requestMarkAsSolvedButton = $(".request-container .mark-as-solved:not([data-disabled])"),
    $requestMarkAsSolvedCheckbox = $(".request-container .comment-container input[type=checkbox]"),
    $requestCommentSubmitButton = $(".request-container .comment-container input[type=submit]");

  $requestMarkAsSolvedButton.on("click", function () {
    $requestMarkAsSolvedCheckbox.attr("checked", true);
    $requestCommentSubmitButton.prop("disabled", true);
    $(this).attr("data-disabled", true).closest("form").submit();
  });

  // Change Mark as solved text according to whether comment is filled
  var $requestCommentTextarea = $(".request-container .comment-container textarea");

  $requestCommentTextarea.on("keyup", function() {
    if ($requestCommentTextarea.val() !== "") {
      $requestMarkAsSolvedButton.text($requestMarkAsSolvedButton.data("solve-and-submit-translation"));
      $requestCommentSubmitButton.prop("disabled", false);
    } else {
      $requestMarkAsSolvedButton.text($requestMarkAsSolvedButton.data("solve-translation"));
      $requestCommentSubmitButton.prop("disabled", true);
    }
  });

  // Disable submit button if textarea is empty
  if ($requestCommentTextarea.val() === "") {
    $requestCommentSubmitButton.prop("disabled", true);
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }

  $(".header .icon-menu").on("click", function(e) {
    e.stopPropagation();
    var menu = document.getElementById("user-nav");
    var isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", !isExpanded);
  });

  if ($("#user-nav").children().length === 0) {
    $(".header .icon-menu").hide();
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function() {
    this.form.submit();
  });

  // Toggles expanded aria to collapsible elements
  $(".collapsible-nav, .collapsible-sidebar").on("click", function(e) {
    e.stopPropagation();
    var isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
  });

});

function classToggle($elem) {
 $elem.classList.toggle("cat-section-selected");
};
