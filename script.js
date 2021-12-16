/*
 * jQuery v1.9.1 included
 */

$(document).ready(function () {

  // In-site Redirects
  var oldIds = ["360028972211","360052204252","360029201051","360028975011","360028974471","360018832998"];
  var newIds = ["4406732893457","4406732893457","4406732893457","4406732893457","4406732893457","360018667217"];

  for (var i = 0; i < oldIds.length; i++){
    if (window.location.href.indexOf(oldIds[i]) > -1) {
      window.location.href = 'https://support.exclaimer.com/hc/en-us/articles/' + newIds[i]; 
    }
  }

  // Redirect to new KB
  var oldkbIds = ["360033728771"];
  var newkbIds = ["360050180772"];

  for (var i = 0; i < oldkbIds.length; i++){
    if (window.location.href.indexOf(oldkbIds[i]) > -1) {
      window.location.href = 'https://support.portal.exclaimer.com/hc/en-us/articles/' + newkbIds[i]; 
    }
  } 

  // Show div html based on tag
  if (HelpCenter.user.role === "anonymous") {
    $("div.inty").hide();
  } else {
    if (
      HelpCenter.user["tags"].indexOf("partner") > -1 ||
      HelpCenter.user["tags"].indexOf("support") > -1
    ) {
      $("div.inty").show();
    } else {
      $("div.inty").hide();
    }
  }

  //Store the ticket form ID
  const ticketForm = location.search.split("ticket_form_id=")[1];

  // Support Ticket Form
  if (ticketForm == 360000355937) {
    // Licence Key
    $(".form-field.request_custom_fields_360014285458").append(
      '<p id="request_description_hint">To locate your licence key for Exclaimer, follow the guide <a href="https://support.exclaimer.com/hc/en-gb/articles/360018306577" target="_blank">here</a></p>'
    );
    // Subscription ID
    $(".form-field.request_custom_fields_360014356197").append(
      '<p id="request_description_hint">To obtain your Sub ID, follow the steps <a href="https://support.portal.exclaimer.com/hc/en-gb/articles/360018307337" target="_blank">here</a></p>'
    );

    // Hides discontinued products from drop down
    var tagsToRemove = [
      "as",
      "ia",
      "mu",
      "sm",
      "exchange_address_tagging",
      "outlook_photos",
    ];
    removeTagsWeDontWant();
    function removeTagsWeDontWant() {
      $(".nesty-panel").on("DOMNodeInserted", function () {
        for (var i in tagsToRemove) {
          $("li#" + tagsToRemove[i]).remove();
        }
      });
    }
  }

  // Early Access Program Form
  if (ticketForm == 360000471838) {
    // Licence Key
    $(".form-field.request_custom_fields_360014285458").append(
      '<p id="request_description_hint">To locate your licence key for Exclaimer, follow the guide <a href="https://support.exclaimer.com/hc/en-gb/articles/360018306577" target="_blank">here</a></p>'
    );
    // Subscription ID
    $(".form-field.request_custom_fields_360014356197").append(
      '<p id="request_description_hint">To obtain your Sub ID, follow the steps <a href="https://support.portal.exclaimer.com/hc/en-gb/articles/360018307337" target="_blank">here</a></p>'
    );

    $("#request_custom_fields_360001315371").val(
      "ecsm"
    );
    $("#request_custom_fields_360001315371").parent(".request_custom_fields_360001315371").hide();

    $('#request_subject').val('Early Access Program Signup Request');
    $("#request_subject").parent(".request_subject").hide();

    // Hides discontinued products from drop down
    var tagsToRemove = [
      "smee",
      "smoe",
      "ma3",
      "ar",
      "ame",
      "te",
      "md1",
      "s365",
      "as",
      "ia",
      "mu",
      "sm",
      "exchange_address_tagging",
      "outlook_photos",
    ];
    removeTagsWeDontWant();
    function removeTagsWeDontWant() {
      $(".nesty-panel").on("DOMNodeInserted", function () {
        for (var i in tagsToRemove) {
          $("li#" + tagsToRemove[i]).remove();
        }
      });
    }
  }

  var dropzoneId = "pI9ntA_8cBhqTzB3rZtWAhcgfvJs24Kf6xCNAKAEDx8";

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
  $(".share a").click(function (e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
    $commentContainerFormControls = $(".comment-form-controls, .comment-ccs");

  $commentContainerTextarea.one("focus", function () {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  // Expand Request comment form when Add to conversation is clicked
  var $showRequestCommentContainerTrigger = $(
      ".request-container .comment-container .comment-show-container"
    ),
    $requestCommentFields = $(
      ".request-container .comment-container .comment-fields"
    ),
    $requestCommentSubmit = $(
      ".request-container .comment-container .request-submit-comment"
    );

  $showRequestCommentContainerTrigger.on("click", function () {
    $showRequestCommentContainerTrigger.hide();
    $requestCommentFields.show();
    $requestCommentSubmit.show();
    $commentContainerTextarea.focus();
  });

  // Mark as solved button
  var $requestMarkAsSolvedButton = $(
      ".request-container .mark-as-solved:not([data-disabled])"
    ),
    $requestMarkAsSolvedCheckbox = $(
      ".request-container .comment-container input[type=checkbox]"
    ),
    $requestCommentSubmitButton = $(
      ".request-container .comment-container input[type=submit]"
    );

  $requestMarkAsSolvedButton.on("click", function () {
    $requestMarkAsSolvedCheckbox.attr("checked", true);
    $requestCommentSubmitButton.prop("disabled", true);
    $(this).attr("data-disabled", true).closest("form").submit();
  });

  // Change Mark as solved text according to whether comment is filled
  var $requestCommentTextarea = $(
    ".request-container .comment-container textarea"
  );

  $requestCommentTextarea.on("keyup", function () {
    if ($requestCommentTextarea.val() !== "") {
      $requestMarkAsSolvedButton.text(
        $requestMarkAsSolvedButton.data("solve-and-submit-translation")
      );
      $requestCommentSubmitButton.prop("disabled", false);
    } else {
      $requestMarkAsSolvedButton.text(
        $requestMarkAsSolvedButton.data("solve-translation")
      );
      $requestCommentSubmitButton.prop("disabled", true);
    }
  });

  // Disable submit button if textarea is empty
  if ($requestCommentTextarea.val() === "") {
    $requestCommentSubmitButton.prop("disabled", true);
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select").on(
    "change",
    function () {
      search();
    }
  );

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function (e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val(),
    });
  }

  $(".header .icon-menu").on("click", function (e) {
    e.stopPropagation();
    var menu = document.getElementById("user-nav");
    var isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", !isExpanded);
  });

  if ($("#user-nav").children().length === 0) {
    $(".header .icon-menu").hide();
  }

  // Submit organization form in the request page
  $("#request-organization select").on("change", function () {
    this.form.submit();
  });

  // Toggles expanded aria to collapsible elements
  $(".collapsible-nav, .collapsible-sidebar").on("click", function (e) {
    e.stopPropagation();
    var isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
  });
});

// $(".cat-section").first().addClass( "cat-section-selected" );

// function classToggle($elem) {
//  $elem.classList.toggle("cat-section-selected");
// };
