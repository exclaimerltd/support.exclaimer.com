/*
 * jQuery v1.9.1 included
 */

$(document).ready(function () {

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

  // Licence Key
  $(".form-field.request_custom_fields_360014285458").append(
    '<p id="request_description_hint">To locate your licence key for Exclaimer, follow the guide <a href="https://legacy.support.exclaimer.com/hc/en-gb/articles/360018306577" target="_blank">here</a></p>'
  );

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


// $(".cat-section").first().addClass( "cat-section-selected" );

// function classToggle($elem) {
//  $elem.classList.toggle("cat-section-selected");
// };

});
