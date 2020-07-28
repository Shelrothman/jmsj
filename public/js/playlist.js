$(() => {
  $(".currentwatch").on("click", function() {
    const binge = {
      id: $(this).data("id"),
      presentlyWatching: true
    };
    $.ajax({
      method: "PATCH",
      url: "/api/titles",
      data: binge
    }).then(() => {
      // reload page to display binge in proper column
      location.reload();
    });
  });

  // $(".finishwatch").on("click", function () {
  //     const binges_id = this.value;
  //     $.ajax({
  //         method: "PUT",
  //         url: `/api/titles/${binges_id}/alreadyWatched`
  //     }).then(() => {
  //         // reload page to display binge in proper column
  //         location.reload();
  //     });
  // });
});
