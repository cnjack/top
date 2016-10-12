$(function() {
  var $searchBar = $('#searchBar'),
    $searchResult = $('#searchResult'),
    $searchText = $('#searchText'),
    $searchInput = $('#searchInput'),
    $searchClear = $('#searchClear'),
    $searchCancel = $('#searchCancel');

  function hideSearchResult() {
    $searchResult.hide();
    $searchInput.val('');
  }

  function cancelSearch() {
    hideSearchResult();
    $searchBar.removeClass('weui-search-bar_focusing');
    $searchText.show();
  }

  $searchText.on('click', function() {
    $searchBar.addClass('weui-search-bar_focusing');
    $searchInput.focus();
  });
  $searchInput
    .on('blur', function() {
      if (!this.value.length) cancelSearch();
    })
    .on('input', function() {
      if (this.value.length) {
        $searchResult.show();
      } else {
        $searchResult.hide();
      }
    });
  $searchClear.on('click', function() {
    hideSearchResult();
    $searchInput.focus();
  });
  $searchCancel.on('click', function() {
    cancelSearch();
    $searchInput.blur();
  });

  $('.weui-tabbar__item').on('click', function() {
    $(this).addClass('weui-bar__item_on').siblings(
      '.weui-bar__item_on').removeClass('weui-bar__item_on');
  });
});

$(function() {
  var $iosActionsheet = $('#iosActionsheet');
  var $iosMask = $('#iosMask');

  function hideActionSheet() {
    $iosActionsheet.removeClass('weui-actionsheet_toggle');
    $iosMask.fadeOut(200);
  }

  $iosMask.on('click', hideActionSheet);
  $('#iosActionsheetCancel').on('click', hideActionSheet);
  $("#app-send").on("click", function() {
    $iosActionsheet.addClass('weui-actionsheet_toggle');
    $iosMask.fadeIn(200);
  });
});
